const {Schema,model}=require('mongoose');


const UserSchema=Schema({
 name:{
    type:String,
    required:[true,'The name is required']
},
email:{
    type:String,
    required:[true,'The email is required'],
    unique:true
},
password:{
    type:String,
    required:[true,'The password is required']
},
img:{
    type:String
    
},
rol:{
    type:String,
    required:true
},
stage:{
    type:Boolean,
    default:true
},
google:{
    type:Boolean,
    default:false
}
});


//METODOS
UserSchema.methods.toJSON = function() {
    const { _id,__v, password, ...user  } = this.toObject();   
    user.uid=_id;  
    return user;
}

//EXPORTACIONES
module.exports= model('User',UserSchema);