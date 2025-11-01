const Users = require('../models/usermodel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


// User Registration
const registerUser =async(request, response)=>{
    const {name, email, contactNo, address, city, state, password, role} = request.body;
    const profileImage = request.file ? request.file.path : '';
    if(!name || !email || !contactNo || !address || !city || !state || !password || !role){
    response.status(400).json({message:"Please fill all required fields"});
    return;
    }
    try {
        let userExists = await Users.findOne({email:email,password:password});
        if(userExists){
            response.status(400).json({message:"User already exists"});
            return;
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = new Users({
            name,
            email,
            contactNo,
            address,
            city,
            state,
            password:hashedPassword,
            role
        });
        await newUser.save();
        response.status(201).json({message:"User registered successfully"});
    } catch (error) {
        response.status(400).json({message:error.message});
    }
}
//login user
const loginUser=async(request, response)=>{
    const {email,password}=request.body;
    if(!email || !password){
        response.status(400).json({message:"please provide email and password"});
        return;
    }
    try {
        const user = await Users.findOne({email:email});
        if(!user){
            response.status(400).json({message:"Invalid email or password"});
            return;
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            response.status(400).json({message:"Invalid email or password"});
            return;
        }
response.status(200).json({message:"login successfully"});
        
    } catch (error) {
        response.status(400).json({message:error.message});
    }

}


//logout user



const logoutUser =async(request, response)=>{

}
module.exports={registerUser,loginUser,logoutUser};