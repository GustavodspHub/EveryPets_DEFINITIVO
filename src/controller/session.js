const Establishment = require("../models/establishment");
const auth = require("../config/auth")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  async store(req, res) {
    const { email, password } = req.body;

    try {
      const establishment = await Establishment.findOne({
        where: {
          email,
        },
      });

      const result = bcrypt.compareSync(password, establishment.password)

      if (!establishment || !bcrypt.compareSync(password, establishment.password))
        return res.status(403).send({ error: "Usuário e/ou senha inválidos" });

        const token = jwt.sign(
          { establishmentId: establishment.id },
          auth.secret,
          {
            expiresIn: "1h"
          });

      setTimeout(() => {
        res.status(201).send({message: "Bem-vindo à Everypets", token: token});
      }, 3000);

    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
};