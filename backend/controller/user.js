import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/user.js';




export const signupUser= async(req,res)=>{
    try{
        const {name, email,password} = req.body;
        const userexist = await User.findOne({email});

        if(userexist){
            return  res.status(400).json({message:"User already exist"});
        }

        const hastpassword = await bcrypt.hash(String(password),10);
        await User.create({
            name,
            email,
            password: hastpassword
        });


res.json({message:"user register successfully"});

    }catch(error){
        console.error("signup Error",error)
        res.status(500).json({message:"server error",error})
    }
}




export const Loginuser = async(req,res) =>{

    try{

        let  {password,name } = req.body;
    let user = await User.findOne({name});

    if(!user){
        return res.status(400).json({message:"user not register"});
    }

const match = await bcrypt.compare(password, user.password);

if(!match){
    return  res.status(400).json({message:"invalid credentials"});
}


const token = jwt.sign(
  { userId: user._id },
  process.env.JWT_SECRET,
  { expiresIn: "14d" }
);


const decoded = jwt.verify(
  token,
  process.env.JWT_SECRET
);



res.cookie("token", token, {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
  maxAge: 14* 24 * 60 * 60 * 1000
});




    res.status(200).json({
  message: "Login successful",
  user: {
    id: user._id,
    name: user.name,
  },

});

    }catch(err){
        console.log(err);

res.status(400).json({message:"something went wrong"});
    }
}





 export const Logoutuser =  async (req,res)=>{
    try{   
res.clearCookie("token", {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
});

res.status(200).json({message:"Logout sucessfully"});

    }catch(err){
        console.log(err)
        res.status(400).json({message:"something went wrong"})
    }

}




export const getCurrentUser = async (req, res) => {
    res.status(200).json({
        user: {
            _id: req.user._id,
            name: req.user.name,
            email: req.user.email
        }
    });
};