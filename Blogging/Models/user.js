const {Schema,model}=require('mongoose')

const userSchema=new Schema({
    fullName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    salt:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    profileImageUrl:{
        type:String,
        default:'/images/default.png'
    },
    role:{
        type:String,
        enum:["ADMIN","USER"],
        default:'USER'
    }

},{timestamps:true})

const user=model('user',userSchema)

module.exports=user;