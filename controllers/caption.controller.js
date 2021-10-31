const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Captain = require("../models/Captain.model");


module.exports.captainController = {
  registrationCaption: async (req, res) => {
    try {
      const { login, password, name, surname, mail, avatar, eventId } =
        req.body;
      const hash = await bcrypt.hash(
        password,
        Number(process.env.BCRYPT_ROUNDS)
      );

      if (!name) {
        res.status(401).json({ registrationError: "Необходимо ввести имя" });
      }
      if (!surname) {
        res
          .status(401)
          .json({ registrationError: "Необходимо ввести Фамилия" });
      }
      if (!login) {
        res
          .status(401)
          .json({ registrationError: "Необходимо  указать логин" });
      }
      if (!password) {
        res
          .status(401)
          .json({ registrationError: "Необходимо указать пороль" });
      }

      const captain = await Captain.findOne({ login });
      if (captain) {
        res
          .status(401)
          .json({ registrationError: "Такой логин уже существует" });
      }

      await Captain.create({
        name,
        surname,
        login,
        eventId,
        avatar,
        mail,
        password: hash,
      });

      res.status(200).json({ message: "Регистрация прошла  успешно" });
    } catch (e) {
      res
        .status(400)
        .json({ registrationError: `Ошибка при регистрации: ${e.toString()}` });
    }
  },
  authorizationCaptain: async (req, res) => {
    try {
      const { login, password } = req.body;
      const candidate = await Captain.findOne({ login });

      if (login.length === 0) {
        res.status(401).json({ authorizationError: "необходимо ввести логин" });
      }
      if (password.length === 0) {
        res
          .status(401)
          .json({ authorizationError: "необходимо ввести пароль" });
      }
      if (!candidate) {
        res.status(401).json({ authorizationError: "неверный логин" });
      }
      const valid = await bcrypt.compare(password, candidate.password);
      if (!valid) {
        res.status(401).json({ authorizationError: "неверный пароль" });
      }

      const payload = {
        id: candidate._id,
      };

      const token = jwt.sign(payload, process.env.JWT_KEY, {
        expiresIn: "24h",
      });

      res.status(200).json({ token });
    } catch (e) {
      res.status(400).json(`Ошибка при  регистрации: ${e.toString()}`);
    }
  },
  getCaptainById: async (req, res) => {
    try {
      const captions = await Captain.findById(req.captain.id);
      res.status(200).json(captions);
    } catch (e) {
      res.status(400).json({
        error: `Ошибка  при  получение   авторизованного  капитана: ${e.toString()}`,
      });
    }
  },

  removeAccount: async (req, res) => {
    try {
      const captain = await Captain.findById(req.captain.id);
      await Captain.findByIdAndDelete(captain);

      res.json({ message: "ваш аккаунт успешно удален" });
    } catch (e) {
      res
        .status(400)
        .json({ error: `Ошибка при удаления капитан ${e.toString()}` });
    }
  },

  editProfile: async (req, res) => {
    try {
      const { name, surname, mail, avatar } = req.body;
      const id = req.captain.id;
      const options = { new: true };

      const pathCaptainById = await Captain.findByIdAndUpdate(
        id,
        { name, surname, mail, avatar },
        options
      );
      res.json(pathCaptainById);
    } catch (e) {
      res
        .status(400)
        .json({ error: `Ошибка при изменения профиля ${e.toString()}` });
    }
  },
};
