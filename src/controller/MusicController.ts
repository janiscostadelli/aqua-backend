import { Request, Response } from "express";
import MusicBusiness from "../business/MusicBusiness";
import MusicDatabase from "../data/MusicDatabase";
import { createMusicDTO } from "../models/musicModels";
import Authenticator from "../middlewares/Authenticator";

class MusicController {
  createMusic = async (req: Request, res: Response) => {
    try {
      const nickname = Authenticator.getData(
        req.headers.authorization!
      ).nickname;
      const music: createMusicDTO = {
        name: req.body.name,
        artist: req.body.artist,
        playlist_id: req.body.playlist_id,
        user_nickname: nickname,
        url: req.body.url,
        genre: req.body.genre,
      };

      const message = await MusicBusiness.createMusic(music);
      res.status(200).send({ message });
    } catch (error) {
      if(error.sqlMessage){
        if(error.sqlMessage.includes("playlist")){
          res.status(400).send({error: 'Playlist não encontrada'})
        }
        if(error.sqlMessage.includes("Duplicate entry")){
          res.status(400).send({error: 'Essa música já foi adicionada'})
        }
      }
      res.status(400).send({ error: error.message });
    }
  };

  getAllMusics = async (req: Request, res: Response) => {
    try {
      const result = await MusicDatabase.getAllMusics();
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  };
}

export default new MusicController();
