const User = require('../models').User;
module.exports = {
    create(req,res){
        return User
        .create({
            username: req.body.username,
            password: req.body.password,
            name : req.body.nama
        })
        .then(users => res.status(201).send(users))
        .catch(error => res.status(400).send(error))
    },
};