const { Router } = require("express")

const router = Router()

router.use(require("./captain.route"))
router.use(require("./players.route"))
router.use("/events", require("./events.route"))
router.use(require("./teams.route"))

module.exports = router