const User = require ("../models/user");
// const bcrypt = require("bcryptjs");

module.exports = {
    async store(req, res){
        const {
            cnpj,
            establishment_name,
            password ,
            image,
            responsible_name ,
            email 
        } = req.body;

        let user = await User.findone({
            where: {
                establishment_name: establishment_name
            }
        });

        if(user){
            return res.status(400).send({error: "Este e-mail já está sendo utilizado"})
        }

        // const passwordHashed = bcrypt.hashSync(password);

        user = await User.create({
            cnpj: cnpj,
            establishment_name : establishment_name,
            password : password,
            image : image,
            responsible_name : responsible_name,
            email : email
        });

        res.send({
            user : {
                id: user.id,
                establishment_name : user.establishment_name,
                password : user.password
            }
        });
    }
}