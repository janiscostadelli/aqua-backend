import { Request, Response } from "express";
import MusicBusiness from "../business/MusicBusiness";
import MusicDatabase from "../data/MusicDatabase";
import { createMusicDTO } from "../models/musicModels";

class MusicController {
  createMusic = async (req: Request, res: Response) => {
    try {
      const music: createMusicDTO = {
        title: req.body.title,
        author: req.body.author, 
        date: req.body.date,
        file: req.body.file,
        genre: req.body.genre,
        album: req.body.album,
      };

      const message = await MusicBusiness.createMusic(music);
      res.status(200).send({ message });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  };

  getAllMusics = async (req: Request ,res: Response) => {
    try {
      const result = await MusicDatabase.getAllMusics();
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  };
}

export default new MusicController();