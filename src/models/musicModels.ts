export enum GENRE {
  POP = "pop",
  FORRO = "forró",
  SERTANEJO = "sertanejo",
  ROCK = "rock",
  FUNK = "funk",
  JMUSIC = "j-music",
  ELETRONICA = "eletrônica",
  NENHUM = "nenhum",
}

export type musicDTO = {
  id: string;
  name: string;
  artist: string;
  playlist_id: string;
  user_nickname: string;
  date: Date;
  url: string;
  genre: GENRE;
};

export type createMusicDTO = {
  name: string;
  artist: string;
  playlist_id: string;
  user_nickname: string;
  url: string;
  genre: GENRE;
};

export type searchMusicDTO = {
  playlist_id: string;
  input_text: string;
};
