const Player = require("../models/Player.model")

module.exports.playersController = {
   CaptainAddPlayer: async (req, res) => {
     try {

       const {name, lastname,room, id} = req.body
       if(!name) {
        return  res.status(401).json({errorPlayer: "Ввидите имя игрока!"})
       }
       if(!lastname) {
        return  res.status(401).json({errorPlayer: "Ввидите фамилию игрока!"})
       }
       const newPlayer = await Player.create({
         name,
         room,
         lastname,
         teamId: id
       })
       res.status(200).json(newPlayer)
     }
     catch (e) {
       res.status(400).json("Ошибка  при добавлении игрока " + e.toString())
     }
   },
  removePlayer: async (req, res) => {
     try {
        const {id} = req.params
       await Player.findByIdAndRemove(id);
       res.json("Удалил")


     }
     catch (e) {
       res.json("ошибка при удаления игрока " + e.toString())
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
  addPlayer: async (req, res) => {
    try {
      await Player.create({
        name: req.body.name,
        lastname: req.body.lastname,
        room: req.body.room,
        teamId: req.body.teamId
      })
      res.json("Создан игрок")
    } catch (e) {
      res.json("Ошибка при создании игрока" + e)
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
  },


}