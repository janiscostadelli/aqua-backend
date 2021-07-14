import PlaylistDatabase from "../data/PlaylistDatabase";
import { InvalidInputError } from "../error/InvalidInputError";
import { createPlaylistDTO } from "../models/playlistModels";

class PlaylistBusiness {
  createPlaylist = async (playlist: createPlaylistDTO) => {
    if (!playlist.name) {
      throw new InvalidInputError("Preencha o campo 'name'");
    }
    await PlaylistDatabase.createPlaylist(playlist);
    return "Playlist criada com sucesso!";
  };

}

export default new PlaylistBusiness();
