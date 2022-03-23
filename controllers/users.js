//IMPORTACIONES

const { response } = require("express");
const bcryptjs = require("bcryptjs");
const User = require("../models/user");

//CONTROLADORES

const usersGet = (req, res = response) => {
  const { q, nombre = "no name", page } = req.query;
  res.json({
    msg: "get API-controlador",
    q,
    nombre,
    page,
  });
};


const usersPost = async (req, res) => {  //CREACION
  //extraer el body
  const { nombre, email, password, rol } = req.body;
  const user = new User({ nombre, email, password, rol }); // creacion de instancia

  //Verificar si el correo existe



  //Encriptar la contraseña
  const salt = bcryptjs.genSaltSync(); //numero de vueltas que se necesitan para hacer la encryptacion
  user.password = bcryptjs.hashSync(password, salt);

  //Guardar en DB
  await user.save(); //mongo grabe el registro , espere la grabacion
  res.json({
   user
  });
};




const usersPut = async(req, res) => {
  const { id } = req.params;
  const{_id,password,google,...resto}=req.body;

  //Validar contra base de datos
  if(password){
      //Encriptar la contraseña
  const salt = bcryptjs.genSaltSync(); //numero de vueltas que se necesitan para hacer la encryptacion
  resto.password = bcryptjs.hashSync(password, salt);

  }
const user=await User.findByIdAndUpdate(id,resto); // actualizar el registro, buscalo por el id y actualiza el resto


  res.json({
    msg: "put API-userPut",
    user
  });
};



const usersPatch = (req, res) => {
  res.json({
    msg: "patch API-userPatch",
  });
};

const usersDelete = (req, res) => {
  res.json({
    msg: "delete API-usersDelete",
  });
};

//EXPORTACIONES

module.exports = {
  usersGet,
  usersPut,
  usersPost,
  usersDelete,
  usersPatch,
};
