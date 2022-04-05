//IMPORTACIONES
const mongoose = require("mongoose");
//FUNCIONES

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN, {
      useUnifiedTopology: true,
    });
    console.log("Base de datos online");
  } catch (error) {
    console.log(error);
    throw new Error("Error a la hora de iniciar la base de datos ");
  }
};

//EXPORTACIONES
module.exports = {
  dbConnection,
};
