import express from "express";
import MusicController from "../controller/MusicController";

export const musicRouter = express.Router();
musicRouter.post("/create", MusicController.createMusic);
musicRouter.post("/:playlistId", MusicController.searchMusic);
musicRouter.get("/all", MusicController.getAllMusics);
