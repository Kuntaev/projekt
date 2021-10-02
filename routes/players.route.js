const { Router } = require("express")
const { playersController } = require("../controllers/players.controller")

const router = Router()

router.post("/players/", playersController.addPlayer)
router.get("/players/", playersController.getPlayers)
router.get("/players/:id", playersController.getPlayerId)
router.get("/players/team/:id", playersController.getPlayerTeamId)
router.patch("/players/:id", playersController.editPlayer)
router.delete("/players/:id", playersController.deletePlayer)

module.exports = router