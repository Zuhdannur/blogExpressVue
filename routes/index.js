const userController  = require('../controllers').users;
module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
       message: 'Welcome To API' 
    }));
    app.post('/api/user', userController.create);
    app.post('/api/login', userController.login)
    app.post('/api/test', (req, res) => res.status(200).send({
        message : req.body.nama
    }));
};