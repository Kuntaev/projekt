const { Router } = require("express")

const router = Router()

router.use("/players", require("./players.route"))

module.exports = router