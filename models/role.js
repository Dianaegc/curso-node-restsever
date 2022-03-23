//IMPORTACIONES
const{Schema,model}=require('mongoose')

//FUNCIONES

const RoleSchema=Schema({
rol:{
    type:String,
    required:[true,'The rol its required']
}
});
//EXPORTACIONES
module.exports=model('Role',RoleSchema);