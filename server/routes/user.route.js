import express from "express"
import {addFriend, getFriends, getUsers, leaderboard, loginUser, registerUser} from '../controllers/user.controller.js'

const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.post('/leaderboard', leaderboard)
userRouter.post('/friends', getFriends)
userRouter.post('/get-users', getUsers)
userRouter.post('/add-friend', addFriend)


export default userRouter;