const Event = require("../models/Event.model")
const Captain = require("../models/Captain.model")

module.exports.eventsController = ({
  addEvent: async (req, res) => {
    try {
      const {name, longs, width, date, time,} = req.body
      await Event.create({
        name,
        longs,
        width,
        date,
        time,
      })
      if (!name) {
        return res.status(400).json({
          error: "Необходимо указать Имя!",
        });
      }
      res.json("Событие создано")
    } catch (e) {
      res.json("Ошибка при создании события " + e)
    }
  },
  getEvents: async (req, res) => {
    try {
      const events = await Event.find()
      res.json(events)
    } catch (e) {
      res.json("Ошибка при выводе событий " + e)
    }
  },
  getEventId: async (req, res) => {
    try {
      const event = await Event.findById(req.params.id)
      res.json(event)
    } catch (e) {
      res.json("Ошибка при выводе события " + e)
    }
  },
  editEvent: async (req, res) => {
    try {
      await Event.findOneAndUpdate(req.params.id, req.body)
      res.json("Событие изменено")
    } catch (e) {
      res.json("ошибка при изменинеи " + e)
    }
  },
  deleteEvent: async (req, res) => {
    try {
      await Event.findByIdAndRemove(req.params.id)
      res.json("Событие удалено")
    } catch (e) {
      res.json("ошибка при удалении " + e)
    }
  }
})