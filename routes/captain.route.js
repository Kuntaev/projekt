const {Router} = require("express")
const {captainController} = require("../controllers/caption.controller");

const router = Router()

router.post("/registration", captainController.registrationCaption)
router.post("/authorization", captainController.authorizationCaptain)
router.get("/captain", captainController.getCaptions)

module.exports = router