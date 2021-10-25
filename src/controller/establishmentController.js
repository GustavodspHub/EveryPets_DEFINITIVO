const User = require("../models/establishment");
const bcrypt = require("bcryptjs");


module.exports = {
    async store(req, res) {
        console.log("ok")
        try {
            const {
                cnpj,
                establishment_name,
                password,
                responsible_name,
                email
            } = req.body;


            let user = await User.findOne({
                where: {
                    email: email
                }
            });

            if (user) {
                return res.status(400).send({ error: "Este e-mail já está sendo utilizado" })
            }

            const passwordHashed = bcrypt.hashSync(password);

            user = await User.create({
                cnpj: cnpj,
                establishment_name: establishment_name,
                password: passwordHashed,
                responsible_name: responsible_name,
                email: email
            });

            res.send({
                user: {
                    id: user.id,
                    email: user.email,
                    password: user.password
                }
            });
        } catch (error) {
            console.log(error)
            return res.status(500).send("Erro no servidor");
        }
    }
}

