CREATE TABLE users (
  name VARCHAR(64),
  email VARCHAR (64) UNIQUE,
  nickname VARCHAR(64) UNIQUE PRIMARY KEY,
  password VARCHAR(64)
);

CREATE TABLE musics (
  id VARCHAR(128) UNIQUE PRIMARY KEY,
  title VARCHAR(64),
  author VARCHAR(64),
  date VARCHAR(64),
  file VARCHAR(128),
  genre VARCHAR(64),
  album VARCHAR(64)
)
