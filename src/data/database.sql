-- Tabelas
CREATE TABLE user (
  id VARCHAR(128) PRIMARY KEY,
  name VARCHAR(64),
  email VARCHAR (64) UNIQUE,
  nickname VARCHAR(64) UNIQUE,
  password VARCHAR(64)
);
CREATE TABLE music (
  id VARCHAR(128) UNIQUE PRIMARY KEY,
  name VARCHAR(64),
  artist VARCHAR(64),
  playlist_id VARCHAR(128),
  user_nickname VARCHAR(128),
  date DATE,
  url VARCHAR(128),
  genre ENUM(
    'pop',
    'forró',
    'sertanejo',
    'rock',
    'funk',
    'j-music',
    'eletrônica',
    'nenhum'
  ) DEFAULT 'nenhum',
  FOREIGN KEY (user_nickname) REFERENCES user(nickname),
  FOREIGN KEY (playlist_id) REFERENCES playlist(id)
);
CREATE TABLE playlist (
  id VARCHAR(128) PRIMARY KEY,
  name VARCHAR(64)
);
-- Login
SELECT
  *
FROM
  user
WHERE
  email = "jcostadelli@gmail.com";
-- Signup
INSERT INTO
  user (id, name, email, nickname, password)
VALUES
  (
    'd35f66c8-ca46-453d-8b64-d285abb458df',
    'Janis Costadelli',
    'jcostadelli@gmail.com',
    'janisu',
    'senha123'
  );
-- CreatePlaylist
INSERT INTO
  playlist (id, name)
VALUES
  (
    '6494f79f-a99c-4716-99a5-a2dea5a6893d',
    'shoujo'
  );
-- GetAllPlaylists
SELECT
  *
FROM
  playlist;
-- CreateMusic
INSERT INTO
  music (
    id,
    name,
    artist,
    playlist_id,
    user_nickname,
    date,
    url,
    genre
  )
VALUES
  (
    'a5431c1b-5b80-4c82-8188-4451052433e8',
    'Nijiiro Passions',
    'NijiGaku',
    '621858c4-e496-4335-81ff-8ca83aaf127e',
    'janisu',
    '2021-03-26',
    'https://sndup.net/3k8q/d',
    'j-music'
  );
-- GetMusicsByPlaylist
SELECT
  *
FROM
  music
WHERE
  playlist_id = "621858c4-e496-4335-81ff-8ca83aaf127e";
-- SearchMusic
SELECT
  *
FROM
  music
WHERE
  playlist_id = "621858c4-e496-4335-81ff-8ca83aaf127e"
  AND (name LIKE '%NijiGaku%'
  OR artist LIKE '%NijiGaku%');

ALTER TABLE playlist
ADD UNIQUE (name);