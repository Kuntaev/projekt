const { Router } = require("express")

const router = Router()

router.use(require("./captain.route"))
router.use("/players", require("./players.route"))
router.use("/events", require("./events.route"))

module.exports = router