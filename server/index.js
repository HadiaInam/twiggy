import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import userRouter from './routes/user.route.js'

// App Config
const app = express()
const port = process.env.PORT || 4000

import mongoose from "mongoose";

const connectDB  = async () => {
    
    mongoose.connection.on('connected', () => {
        console.log('Mongo connected');
    })

    await mongoose.connect(`mongodb+srv://hadiainam:XBpM1RpqhshuhFnw@twiggy.c7150.mongodb.net/?retryWrites=true&w=majority&appName=twiggy`)
}

connectDB()

// Middlewares
app.use(express.json())
app.use(cors())

// API endpoints
app.use('/api/user', userRouter)

// API endpoints
app.get('/', (req,res) => {
    res.send("API working")
})
app.listen(port, () => console.log('Server started on PORT: ' + port))