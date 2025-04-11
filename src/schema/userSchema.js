const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:[true,"first name is required"],
        minLength:[5,"first name must be atleast 5 characters long"],
        lowercase:true,
        trim:true,//if user gives extra space then it will automatically remove it 
        maxLength:[20,"first name should be less than or equal to 20 charactrs"]
    },
    mobileNumber:{
        type:String,
        trim:true,
        maxLength:[10,"phone number should be of length 10"],
        minLength:[10,"phone number should be of length 10"],
        unique:[true,"phone number is already in use"],
        required:[true,"phone number should be provided"]
    },
    email:{
        type:String,
        trim:true,
        required:[true,"Email should be provided"],
        unique:[true,"Email is already in use"],
        match:[ /^[^\s@]+@[^\s@]+\.[^\s@]+$/,"please fill a valid email address"]
    },
    password:{
        type:String,
        required:[true,"password should be provided"],
        minLength:[6,"password should be minimum of 6 character long"]
    }


},
{
    timestamps:true
})


const User = mongoose.model("user",userSchema) // collection 

module.exports = User;