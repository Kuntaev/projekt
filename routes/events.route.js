const { Router } = require("express")
const { eventsController } = require("../controllers/events.controller")

const router = Router()

router.post("/", eventsController.addEvent)
router.get("/", eventsController.getEvents)
router.get("/:id", eventsController.getEventId)
router.patch("/:id", eventsController.editEvent)
router.delete("/:id", eventsController.deleteEvent)

module.exports = router