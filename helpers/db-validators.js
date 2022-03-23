
//IMPORTACIONES
const Role = require("../models/role");
const User=require('../models/user');

//FUNCIONES
const esRolValido =async (rol = "") => {
    const existeRol = await Role.findOne({ rol });
    if (!existeRol) {
      throw new Error(`The rol ${rol}its not registered in the database`);
    }
  }

  //const emailExiste, de un error si el correo ya esta registrado
  const emailExiste=async(email='')=>{
    const existeEmail=await User.findOne({email});
    if(!existeEmail){
      throw new Error(`The email: ${email} is already registered`);
    }
  }
  const existeUsuarioPorId=async(id='')=>{
    const existeUsuario=await User.findById({id});
    if(!existeUsuario){
      throw new Error(`The id doesnt exist: ${id} `);
    }
  }


  //EXPORTACIONES

  module.exports={
      esRolValido,
      emailExiste,
      existeUsuarioPorId
  }


  
