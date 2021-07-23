import express from "express";
import MusicController from "../controller/MusicController";

export const musicRouter = express.Router();
musicRouter.post("/create", MusicController.createMusic);
musicRouter.post("/search", MusicController.searchMusic);
musicRouter.get("/all", MusicController.getAllMusics);
