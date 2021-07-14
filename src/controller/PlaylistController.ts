import { Request, Response } from "express";
import PlaylistBusiness from "../business/PlaylistBusiness";
import PlaylistDatabase from "../data/PlaylistDatabase";
import { createPlaylistDTO } from "../models/playlistModels";

class PlaylistController {
  createPlaylist = async (req: Request, res: Response) => {
    try {
      const playlist: createPlaylistDTO = {
        name: req.body.name,
      };
      const message = await PlaylistBusiness.createPlaylist(playlist);
      res.status(200).send({ message });
    } catch (error) {
      if (error.sqlMessage) {
        if (error.sqlMessage.includes("name")) {
          res.status(400).send({ error: "Esta playlist já existe" });
        }
      }
      res.status(400).send({ error: error.message });
    }
  };

  getAllPlaylists = async (req: Request, res: Response) => {
    try {
      const result = await PlaylistDatabase.getAllPlaylists();
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  };
}

export default new PlaylistController();
