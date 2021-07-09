import IdGenerator from "../middlewares/IdGenerator";
import { createMusicDTO } from "../models/musicModels";
import connection from "./connection";

class MusicDatabase {
  tableName: string;
  constructor(tableName: string = "musics") {
    this.tableName = tableName;
  }

  createMusic = async (music: createMusicDTO) => {
    await connection.raw(`
      INSERT INTO ${this.tableName} (id, title, author, date, file, genre, album) VALUES (
        "${IdGenerator.generate()}",
        "${music.title}",
        "${music.author}",
        "${music.date}",
        "${music.file}",
        "${music.genre}",
        "${music.album}"
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

/*
  title: string,
  author: string,
  date: Date,
  file: string,
  genre: string[],
  album: string */
