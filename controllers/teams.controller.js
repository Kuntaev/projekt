const Team = require("../models/Team.model");
const Captain = require("../models/Captain.model")
const path = require("path");

module.exports.teamsController = {
  // addTeam: async (req, res) => {
  //   try{
  //   const captain = await Captain.findById(req.captain.id)
  //   const {name, eventId} = req.body
  //
  //   const  {image} =req.files;
  //
  //   const newFileName = `${Math.floor(Math.random() * 10000)}${image.name}`;
  //   await image.mv(`./client/public/images/${newFileName}`, async (err) => {
  //     if (err) {
  //       res.json(err.toString())
  //     } else {
  //       const team = await Team.create({
  //         name,
  //         eventId,
  //         image: newFileName,
  //         captain
  //       });
  //       res.json(team)
  //     }
  //   });
  //   } catch (e) {
  //     res.json(e.toString())
  //   }
  // },
  addTeam: async (req, res) => {
    try {
      const captain = await Captain.findById(req.captain.id)
      const team = await Team.create({
        name: req.body.name,
        eventId: req.body.eventId,
        image: req.body.image,
        captain
      });
      res.json(team);
    } catch (e) {
      res.json("Ошибка при создании команды " + e);
    }
  },
  getTeams: async (req, res) => {
    try {
      const teams = await Team.find();
      res.json(teams);
    } catch (e) {
      res.json("Ошибка при выводе команд " + e);
    }
  },
  getTeamId: async (req, res) => {
    try {
      const team = await Team.findById(req.params.id).populate("captain");
      console.log(team)
      res.json(team);
    } catch (e) {
      res.json("Ошибка при выводе команды " + e);
    }
  },
  getMyTeamId: async (req, res) => {
    try {
      const team = await Team.findById(req.params.id);
      res.json(team);
    } catch (e) {
      res.json("Ошибка при выводе команды " + e);
    }
  },
  editTeam: async (req, res) => {
    try {
      const team = await Team.findByIdAndUpdate(req.params.id, req.body);
      console.log(req.params.id)
      res.json(team);
    } catch (e) {
      res.json("ошибка при изменении " + e);
    }
  },
  deleteTeam: async (req, res) => {
    try {
      await Team.findByIdAndRemove(req.params.id);
      res.json(req.params.id);
    } catch (e) {
      res.json("Ошибка при удалении " + e);
    }
  },
  getMyTeams: async (req, res) => {
    try {
      const captain = await Captain.findById(req.captain.id)
      const team = await Team.find({ captain })
      res.json(team)
    } catch (e) {
      res.json("Ошибка при выводе команд " + e)
    }
  },

};
