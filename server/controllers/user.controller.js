import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import userModel from "../models/user.model.js"

const createToken = (id) => {
    return jwt.sign({id}, 'secret')
}

export const loginUser = async (req,res) => {

    try {
        
        const {email, password} = req.body;
        const user = await userModel.findOne({email});

        if(!user){
            return res.json({succes:false, message:"User not found"})
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(isMatch){
            const token = createToken(user._id)
            res.json({success:true, token})
        }
        else {
            res.json({success:false, message: 'Invalid credentials'})
        }

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}


// Route for user register

export const registerUser = async (req,res) => {
    try {
        const {username,email,password} = req.body;

        // Check if user exists
        const exists = await userModel.findOne({email});
        if (exists){
            return res.json({success: false, message:"User already exists"})
        }

        // Validating email format and strong password

        //hashing password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const newuser = new userModel({
            username,
            email,
            password:hashedPassword
        })

        const user = await newuser.save()
        const token = createToken(user._id)

        res.json({success:true, token})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}
