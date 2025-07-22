import { Router } from "express";
import { getPlayer, getPlayerById, postPlayer } from "./controllers/players-controller";

const router = Router()

router.get("/players", getPlayer);
router.post("/players", postPlayer) 
router.get("/players/:id", getPlayerById);

export default router;