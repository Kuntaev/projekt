const { Router } = require("express")

const router = Router()

router.use(require("./captain.route"))

module.exports = router