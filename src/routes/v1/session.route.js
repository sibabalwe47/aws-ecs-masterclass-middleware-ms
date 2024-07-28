import express from "express";
import SessionController from "../../controllers/session.controller.js";
const route = express.Router();

route.post("/store", SessionController.storeSesion);

route.post("/remove", SessionController.removeSession);

route.get("/health", SessionController.healthCheck)

export default route;
