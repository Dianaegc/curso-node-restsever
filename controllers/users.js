//IMPORTACIONES

const {response}=require('express');


//CONTROLADORES

const usersGet=(req, res=response) => {
  const {q,nombre='no name',page}=req.query;
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

const usersPost=(req, res) => {
  //extraer el body
  const {nombre,edad}=req.body;
  res.json({
    msg: "post API-usersPost",
    nombre,
    edad
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