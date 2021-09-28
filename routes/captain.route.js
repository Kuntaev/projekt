const {Router} = require("express")
const {captainController} = require("../controllers/caption.controller");
const {authMiddleware} = require("../models/middlewares/auth.middlewares");

const router = Router()

router.post("/registration", captainController.registrationCaption)
router.post("/authorization", captainController.authorizationCaptain)
router.get("/captain/personal", authMiddleware, captainController.getCaptainById)
router.delete("/captain/delete", authMiddleware, captainController.removeAccount);
router.post("/captain/personal/avatar", authMiddleware, captainController.addAvatar)

module.exports = router