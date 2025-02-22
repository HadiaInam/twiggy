import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import userModel from "../models/user.model.js"

const createToken = (id) => {
    return jwt.sign({id}, 'secret')
}

const getUserFromToken = async (token) => {
    try {

        const token_decode = jwt.verify(token, 'secret')
        const userId = token_decode.id
        return userId
    } catch (error) {
        console.log(error)
    }
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

export const leaderboard = async (req,res) => {
    try {
        let topUsers = await userModel.find({})
        topUsers.sort((a, b) => a.treeCoins - b.treeCoins).slice(0, 10);
        res.json({success:true, topUsers})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }

}

export const getUsers = async (req, res) => {
    try {
        let users = await userModel.find({})
        res.json({success:true, users})

    } catch (error) {
        console.log(error)
    }
}

export const getFriends = async (req,res) => {
    const {token} = req.body
    const userId = await getUserFromToken(token)
    try{
       let user = await userModel.findById(userId)
       const friends = user.friends
       res.json({success:true, friends})
    }catch(error){
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

export const addFriend = async (req,res) => {
    const {token, friend} = req.body
    const userId = await getUserFromToken(token)
    try{
       let user = await userModel.findById(userId)
       const userFriends = user.friends
       let friends = [...userFriends, friend]
       await userModel.findByIdAndUpdate(userId ,{friends})
       let id = friend._id
       if(userId !== id){
        friends = [...userFriends, user]
        
       await userModel.findByIdAndUpdate(id ,{friends})
       }

       


       res.json({success:true})
    }catch(error){
        console.log(error)
        res.json({success:false, message:error.message})
    }
}