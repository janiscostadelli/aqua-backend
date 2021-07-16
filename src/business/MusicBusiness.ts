import { InvalidInputError } from "../error/InvalidInputError";
import { createMusicDTO, GENRE } from "../models/musicModels";
import MusicDatabase from "../data/MusicDatabase";
class MusicBusiness {
  createMusic = async (music: createMusicDTO) => {
    if (
      !music.name ||
      !music.artist ||
      !music.playlist_id ||
      !music.genre ||
      !music.url
    ) {
      throw new InvalidInputError(
        "Preencha os campos 'name', 'artist', 'playlistId', 'genre' e 'url'"
      );
    }

    if (
      music.genre != GENRE.POP &&
      music.genre != GENRE.FUNK &&
      music.genre != GENRE.ELETRONICA &&
      music.genre != GENRE.SERTANEJO &&
      music.genre != GENRE.FORRO &&
      music.genre != GENRE.JMUSIC &&
      music.genre != GENRE.ROCK &&
      music.genre != GENRE.NENHUM
    ) {
      throw new InvalidInputError(
        "O campo 'genre' deve ser uma das opções: 'funk', 'sertanejo', 'pop', 'eletronica', 'forró, 'j-music', 'rock', 'nenhum'"
      );
    }
    await MusicDatabase.createMusic(music);
    return "Música criada com sucesso";
  };
}

export default new MusicBusiness();
