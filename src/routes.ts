import { Router } from "express";
import { getPlayer, getPlayerById, postPlayer, deletePlayer, updatePlayer } from "./controllers/players-controller";

const router = Router()

router.get("/players", getPlayer);
router.post("/players", postPlayer) 
router.delete("/players/:id", deletePlayer);
router.patch("/players/:id", updatePlayer)
router.get("/players/:id", getPlayerById);

export default router;