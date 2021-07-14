import IdGenerator from "../middlewares/IdGenerator";
import { createMusicDTO } from "../models/musicModels";
import connection from "./connection";

class MusicDatabase {
  tableName: string;
  constructor(tableName: string = "devdatabase.musics") {
    this.tableName = tableName;
  }

  createMusic = async (music: createMusicDTO) => {
    const today = new Date(Date.now());

    await connection.raw(`
      INSERT INTO ${
        this.tableName
      } (id, name, artist, playlist_id, user_nickname, date, url, genre) VALUES (
        "${IdGenerator.generate()}",
        "${music.name}",
        "${music.artist}",
        "${music.playlist_id}",
        "${music.user_nickname}",
        "${today.toDateString()}",
        "${music.url}",
        "${music.genre}",
      );`);
  };

  getAllMusics = async () => {
    const [result] = await connection.raw(`
      SELECT * FROM ${this.tableName};
    `);
    return result;
  };
}

export default new MusicDatabase();