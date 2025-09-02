import express from "express";
import multer from "multer";
import { getImage, storeImage } from "../controllers/imageController.js";

const storage = multer.memoryStorage();
const upload = multer({ storage });

const imageRouter = express.Router();

imageRouter.post("/", upload.single("file"), storeImage);
imageRouter.get("/", getImage);

export default imageRouter;
