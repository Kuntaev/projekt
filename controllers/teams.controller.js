const Team = require("../models/Team.model");
const Captain = require("../models/Captain.model")
const path = require("path");

module.exports.teamsController = {
  // addTeam: async (req, res) => {
  //   try{
  //     const captain = await Captain.findById(req.captain.id)
  //
  //     const newFileName = `./client/public/images/${Math.random() * 1000000}${path.extname(req.files.image.name)}`;
  //
  //     req.files.image.mv(newFileName, async (err) => {
  //     if (err) {
  //       res.json(err.toString())
  //     } else {
  //       const team = await Team.create({
  //         name: req.body.name,
  //         eventId: req.body.eventId,
  //         image: newFileName,
  //         captain
  //       });
  //       await team.save()
  //       res.json(team)
  //     }
  //   });
  //   } catch (e) {
  //     res.json("ошибка: " + e.toString())
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
  addImage: async (req, res) => {
    try {
      const image = req.files.image
      const newFileName = `${Math.random() * 1000000}${path.extname(image.name)}`;

      image.mv(`./client/public/images/${newFileName}`, async (err) => {
        if(err) {
          res.json("ошибка: " + err)
        } else {
          const team = await Team.findById(req.params.id);

          team.image = newFileName

          await team.save()
          res.json("файл загружен")
        }
      })
    } catch (e) {
      console.log("Ошибка: " + e)
    }
  },
  getTeams: async (req, res) => {
    try {
      const teams = await Team.find().populate('captain').lean();
      res.json(teams);
    } catch (e) {
      res.json("Ошибка при выводе команд " + e);
    }
  },
  getTeamId: async (req, res) => {
    try {
      const team = await Team.findById(req.params.id).populate("captain");
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
