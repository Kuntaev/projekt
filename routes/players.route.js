const { Router } = require("express")
const { playersController } = require("../controllers/players.controller")

const router = Router()
router.post("/player/receive", playersController.CaptainAddPlayer)
router.post("/", playersController.addPlayer)
router.get("/", playersController.getPlayers)
router.get("/:id", playersController.getPlayerId)
router.get("/team/:id", playersController.getPlayerTeamId)
router.patch("/:id", playersController.editPlayer)
router.delete("/:id", playersController.deletePlayer)

module.exports = router