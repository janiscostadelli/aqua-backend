import IdGenerator from "../middlewares/IdGenerator";
import { createPlaylistDTO, playlistDTO } from "../models/playlistModels";
import connection from "./connection";

class PlaylistDatabase {
  tableName: string;
  constructor(tableName: string = "devdatabase.playlist") {
    this.tableName = tableName;
  }

  createPlaylist = async (playlist: createPlaylistDTO) => {
    await connection.raw(`
    INSERT INTO ${this.tableName} (id, name) VALUES (
      '${IdGenerator.generate()}',
      '${playlist.name}'
    )
    `);
  };

  getAllPlaylists = async (): Promise<playlistDTO[]> => {
    const [result] = await connection.raw(`
    SELECT * FROM ${this.tableName}`);
    return result;
  };
}

export default new PlaylistDatabase();
