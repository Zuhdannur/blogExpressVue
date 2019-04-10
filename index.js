const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const formdiable = require('express-formidable');
const port = 3000;
// const db = require('./db');
const models = require('./models');
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
// app.use(formdiable());
app.use(bodyParser.urlencoded({extended:true}));
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

models.sequelize.sync().then(function(){
console.log("nice");
});

require('./routes')(app);
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome To Api'
}));
app.post('/api/lol', (req, res) => res.status(200).send({
   message : req.body.nama
}));
module.exports = app;