import express from "express";
import {
  CreateVisitingCard,
  getVisitingCards,
} from "../controllers/visitingcardController.js";

const profileRouter = express.Router();

profileRouter.post("/", CreateVisitingCard);
profileRouter.get("/", getVisitingCards);

export default profileRouter;
