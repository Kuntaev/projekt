const Player = require("../models/Player.model")

module.exports.playersController = {
  addPlayer: async (req, res) => {
    try {
      await Player.create({
        name: req.body.name,
        lastname: req.body.lastname,
        teamId: req.body.teamId
      })
      res.json("Создан игрок")
    } catch (e) {
      res.json("Оибка при создании игрока" + e)
    }
  },
  getPlayers: async (req, res) => {
    try {
      const players =  await Player.find()
      res.json(players)
    } catch (e) {
      res.json("Ошибка при выводе игроков" + e)
    }
  },
  getPlayerId: async (req, res) => {
    try {
      const player = await Player.findById(req.params.id)
      res.json(player)
    } catch (e) {
      res.json("Ошибка при выводе игрока" + e)
    }
  },
  getPlayerTeamId: async (req, res) => {
    try {
      const player = await Player.find({teamId: req.params.id})
      res.json(player)
    } catch (e) {
      res.json("ошибка при выводе" + e)
    }
  },
  editPlayer: async (req, res) => {
    try {
      await Player.findByIdAndUpdate(req.params.id, req.body)
      res.json("Данные игрока изменены")
    } catch (e) {
      res.json("Не удалось изменить данные" + e)
    }
  },
  deletePlayer: async (req, res) => {
    try {
      await Player.findByIdAndRemove(req.params.id)
      res.json("Игрок удален")
    } catch (e) {
      res.json("ошибка при удалении" + e)
    }
  }
}