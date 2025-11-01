const mongoose =  require('mongoose');
const userSchema = new mongoose.Schema({
    profileImage:{
        type:String,
        required:false,

    },
 name:{
    type:String,
    required:true
 },
    email:{
    type:String,
    required:true
    },
    contactNo:{
    type:String,
    required:true},
    address:{
    type:String,
    required:true   
    },
    city:{
    type:String,        
    required:true
    },
    state:{ 
    type:String,
    required:true
    },
    password:{
    type:String,
    required:true
    },
    role:{
        type:String,
        default:'user',
        enum:['receptionist','houseKeeper','manager']
    },
})
module.exports = mongoose.model('Users',userSchema);