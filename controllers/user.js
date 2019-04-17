const User = require('../models').User;
const Bycrypt = require('bcrypt');
const salt  = 10;


module.exports = {

    create(req,res){
        Bycrypt.hash(req.body.password,salt,function(err,hash){
            return User
                .create({
            username: req.body.username,
            password: hash,
            name : req.body.nama
        })
        .then(users => res.status(201).send(users))
        .catch(error => res.status(400).send(error))
        });
    },

    login(req,res){
        User.findAll({
            where:{
                username : req.body.username
            }
        }).then(data =>{
            if(data.length > 0){
                Bycrypt.compare(req.body.password,data[0].password,function (err,result) {
                    if(result){
                        res.status(200).send({
                            message : "success",
                            result : data
                        });
                    } else {
                        res.status(200).send({
                            message : "wrong password",
                        });
                    }
                })
            } else {
                res.status(200).send({
                    message : "Account not Avalaible",
                });
            }
        })
    },
    
};
