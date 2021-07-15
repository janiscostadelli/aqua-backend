import IdGenerator from "../middlewares/IdGenerator";
import { createMusicDTO, searchMusicDTO } from "../models/musicModels";
import connection from "./connection";

class MusicDatabase {
  tableName: string;
  constructor(tableName: string = "devdatabase.music") {
    this.tableName = tableName;
  }

  createMusic = async (music: createMusicDTO) => {
    await connection.raw(`
      INSERT INTO ${
        this.tableName
      } (id, name, artist, playlist_id, user_nickname, date, url, genre) VALUES (
        "${IdGenerator.generate()}",
        "${music.name}",
        "${music.artist}",
        "${music.playlist_id}",
        "${music.user_nickname}",
        NOW(),
        "${music.url}",
        "${music.genre}"
      );`);
  };

  getAllMusics = async () => {
    const [result] = await connection.raw(`
      SELECT * FROM ${this.tableName};
    `);
    return result;
  };

  searchMusic = async (searchMusic: searchMusicDTO) => {
    const [result] = await connection.raw(`
    SELECT * FROM ${this.tableName} WHERE 
      playlist_id = "${searchMusic.playlist_id}" 
      AND (name LIKE '%${searchMusic.input_text}%' 
      OR artist LIKE '%${searchMusic.input_text}%')`);
    return result;
  };
}

export default new MusicDatabase();
