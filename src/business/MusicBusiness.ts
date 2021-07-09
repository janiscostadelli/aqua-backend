import { InvalidInputError } from "../error/InvalidInputError";
import { createMusicDTO } from "../models/musicModels";
import MusicDatabase from "../data/MusicDatabase";
class MusicBusiness {
  createMusic = async (music: createMusicDTO) => {
    console.log(music);
    if (
      !music.title ||
      !music.author ||
      !music.date ||
      !music.file ||
      !music.genre ||
      !music.album
    ) {
      throw new InvalidInputError(
        "Preencha os campos 'title', 'author', 'date', 'file', 'genre' e 'album'"
      );
    }
    await MusicDatabase.createMusic(music);
    return "Música criada com sucesso";
  };
  
}

export default new MusicBusiness();
