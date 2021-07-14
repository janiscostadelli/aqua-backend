import express from "express";
import PlaylistController from "../controller/PlaylistController";

export const playlistRouter = express.Router();
playlistRouter.post("/create", PlaylistController.createPlaylist);
playlistRouter.get("/all", PlaylistController.getAllPlaylists);