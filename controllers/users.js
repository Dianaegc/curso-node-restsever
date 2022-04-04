//IMPORTACIONES

const {response}=require('express');
const bcryptjs=require('bcryptjs');
const User=require('../models/user');


//CONTROLADORES

const usersGet=(req, res=response) => {
  const {q,nombre='no name',page=1}=req.query;
    res.json({
      msg: "get API-controlador",
      q,
      nombre,
      page
    });
  }

const usersPut=(req, res) => {
  const {id}=req.params;
  res.json({
    msg: "put API-userPut",
    id,
    
  });
}

const usersPost= async (req, res) => {
  //extraer el body
  const {name,email,password,rol}=req.body;
  const user=new User({name,email,password,rol});//creacion de la instancia 
  //Verificar si el correo existe
  //Encriptar la contraseña
  const salt= bcryptjs.genSaltSync(); //numero de vueltas para haccer mas dificil desencriptarlo
  user.password= bcryptjs.hashSync( password.toString(),salt);
  //Guardar en BD
  await user.save();// aqui me guarda la data en la base de datos 
  res.json({
 
   user
  });
}


const usersPatch=(req, res) => {
  res.json({
    msg: "patch API-userPatch",
  });
}


const usersDelete=(req, res) => {
  res.json({
    msg: "delete API-usersDelete",
  });
}

  //EXPORTACIONES

  module.exports={
    usersGet,
    usersPut,
    usersPost,
    usersDelete,
    usersPatch
  }