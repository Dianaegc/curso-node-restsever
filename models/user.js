//IMPORTACIONES
const { Schema, model } = require("mongoose");

//FUNCIONES
const UserSchema = Schema({
  nombre: {
    type: String,
    required: [true, "The name is required"], // el mensaje es en caso de que no sea enviado
  },
  email: {
    type: String,
    required: [true, "The email is required"], // igual en caso de no ser enviado de manda un mensaje
    unique: true, //para que sea unico  correo
  },
  password: {
    type: String,
    required: [true, "The password is required"],
  },
  img: {
    type: String,
  },
  rol: {
    type: String,
    required: true,
    emun: ["ADMIN_ROLE", "USER_ROLE"], // para validar si tiene un rol de admon o de usuario , solo aceptara estos dos tipos de roles
  },
  stage: {
    type: Boolean,
    default: true,
  },
  google: {
    type: Boolean,
    default: false,
  },
});


//para quitar el password y la version y que no se vean en la base de datos, luego ...user , es que todo lo demas si aparezca

UserSchema.methods.toJSON= function(){
    const{__v,password,...user}=this.toObject();
    return user
}





//EXPORTACIONES
module.exports = model("User", UserSchema);
