const Establishment = require("../models/establishment");
const bcrypt = require("bcryptjs");
// const { generateToken } = require("../utils");

module.exports = {
  async find(req, res) {
    const { email, password } = req.body;

    try {
      const establishment = await Establishment.findOne({
        where: {
          email,
        },
      });

      if (!establishment || !bcrypt.compareSync(password, establishment.password))
        return res.status(403).send({ error: "Usuário e/ou senha inválidos" });

      const token = generateToken({
        establishmentId: establishment.id,
        establishmentName: establishment.name,
      });

      setTimeout(() => {
        res.status(201).send({message: "Bem-vindo ao Everypets", token: token});
      }, 3000);

    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
};