const { Router } = require("express")
const { teamsController } = require("../controllers/teams.controller")

const router = Router()

router.post("/team", teamsController.addTeam)
router.get("/team", teamsController.getTeams)
router.get("/team/:id", teamsController.getTeamId)
router.patch("/team/:id", teamsController.editTeam)
router.delete("/team/:id", teamsController.deleteTeam)

module.exports = router