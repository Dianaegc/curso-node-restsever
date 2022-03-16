//IMPORTACION
const express = require("express");
const cors = require("cors");
const { listen } = require("express/lib/application");

class Sever {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersPath = "/api/users";

    //MIDDLEWARES-
    this.middlewares();

    //RUTAS DE MI APLICACION
    this.routes();
  }
  middlewares() {
    //CORS
    this.app.use(cors());

    //Lectura y parseo del body

    this.app.use(express.json()); // culquier info que venga aqui la va a cambiar a json
    //directorio publico
    this.app.use(express.static("public"));
  }
  routes() {
    this.app.use(this.usersPath, require("../routes/users"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en el puerto:", this.port);
    });
  }
}

//EXPORTACION
module.exports = Sever;
