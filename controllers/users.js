//IMPORTACIONES

const {response}=require('express');
const bcryptjs=require('bcryptjs');
const User=require('../models/user');
const user = require('../models/user');



//CONTROLADORES

const usersGet=async(req, res=response) => {
  //const {q,nombre='no name',page=1}=req.query;
  const {limit=5,from=0}=req.query;  // argumentos opcionales que vienen por el query
  const query={stage:true}; // haciendo el query para extraer solo los que son de stage true 


  const [total,users]= await Promise.all([ // esperar la resolucion de amabas promesas tanto el conteo como el find
    User.countDocuments(query),
    User.find(query)
  .skip(Number(from))
  .limit(Number(limit))
  ]);

    res.json({  // los imprimos en la repsuesta 
      total,
      users
    });
  }

const usersPut=async(req, res) => {  //ACTUALIZACION DE USUARIOS
  const {id}=req.params;
  const{_id,password,google,email,...resto}=req.body;
  //VALIDAR CONTRA BASE DE DATOS
  if(password){
    const salt= bcryptjs.genSaltSync(); //numero de vueltas para haccer mas dificil desencriptarlo
   resto.password=bcryptjs.hashSync(password.toString(),salt);
  }
  //ACTUALIZAR REGISTRO
  const user=await User.findByIdAndUpdate(id,resto)

  res.json(user);
}

/**
 * Metodo para crear un nuevo usuario
 * 
 * @param {*} req 
 * @param {*} res 
 */
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


const usersDelete=async(req, res) => {
  const{id}=req.params // cuando llame la ruta voy a disponer del id que viene de los params 

  //Borrarlos de la base de datos -fisicamente
  //const user=await User.findByIdAndDelete(id);
  const user=await User.findByIdAndUpdate(id,{stage:false});


  res.json(
    {user});
}

  //EXPORTACIONES

  module.exports={
    usersGet,
    usersPut,
    usersPost,
    usersDelete,
    usersPatch
  }