const { Router } = require("express")
const { teamsController } = require("../controllers/teams.controller")
const {authMiddleware} = require('../models/middlewares/auth.middlewares')


const router = Router()

router.post("/team", authMiddleware, teamsController.addTeam)
router.get("/team", teamsController.getTeams)
router.get("/team/:id", teamsController.getTeamId)
router.patch("/my-teams/:id", teamsController.editTeam)
router.delete("/team/:id",  teamsController.deleteTeam)
router.get("/my-teams", authMiddleware, teamsController.getMyTeams)
router.get("/my-teams/:id", teamsController.getMyTeamId)

module.exports = router