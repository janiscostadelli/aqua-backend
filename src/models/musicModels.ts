export type musicDTO = {
  id: string,
  title: string,
  author: string,
  date: Date,
  file: string,
  genre: string[],
  album: string
}

export type createMusicDTO = {
  title: string,
  author: string,
  date: Date,
  file: string,
  genre: string[],
  album: string
}


