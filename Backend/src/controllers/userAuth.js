const userModel = require('../models/user.model');

const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


async function registerUser(req,res)
{


    try{

        const {name,email,password} = req.body;
        if(!name || !email || !password){
            return res.status(400).json({message:"Please fill all the fields"});
        }
       
        const emailExists = await userModel.findOne({email:email});
        if(emailExists){
            return res.status(400).json({message:"User already exists"});
        }

        const hashpassword = await bycrypt.hash(password,10);
       
        const newUser = await userModel.create({
            name,
            email,
            password : hashpassword
        });
        return res.status(201).json({message:"User registered successfully",user:newUser});


    }
    catch(err)  {
            return res.status(500).json({message:err.message});
    }
}


async function LoginUser(req,res){


    try{
        const {email,password} = req.body;
       if(!email || !password){
            return res.status(400).json({message:"Please fill all the fields"});
       }
     const user = await userModel.findOne({email:email});
     if(!user){
        return res.status(400).json({message:"Incorrect email or password"});
     }

     const isPasswordMatch = await bycrypt.compare(password,user.password);
     if(!isPasswordMatch){
        return res.status(400).json({message:"Incorrect email or password"});
     }

     const token = jwt.sign({id:user._id}, process.env.jwtsecret,);
  return res.status(200).cookie("token",token,).json({
    message:`User Login Welcome Back ${user.name}`,
  })


    }
    catch(err){
        return res.status(500).json({message:err.message});
    }
}

module.exports = {

    registerUser,
    LoginUser
}