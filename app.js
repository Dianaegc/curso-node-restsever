//IMPORTACIONES
require('dotenv').config();
const Sever = require('./models/server');


const server=new Sever();


server.listen();


