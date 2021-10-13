const User = require("../models/User");
const bcrypt = require("bcryptjs");

module.exports = {
    async store(req, res) {
        const { email, password } = req.body;

        let user = await User.findOne({
            where: {
                email: email
            }
        })

        if (user) {
            return res.status(400)
                .send({ error: "Este e-mail já está sendo utilizado" })
        }

        const passwordHashed = bcrypt.hashSync(password);

        user = await User.create({
            email: email,
            password: passwordHashed
        });

        res.send({
            user: {
                id: user.id,
                email: user.email
            }
        });
    }
}