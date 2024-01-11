require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

const port = 4000;
// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)



const MONGO_URI = "mongodb+srv://arbazalyani:arbaz123@cluster0.ifqgkpj.mongodb.net/?retryWrites=true&w=majority"

// it is an asyncronus function it will take time that why we are adding try catch method to fire function  when mongoose .connect completes and  catch to catch the error if occured

const connectDB = async () => {
try {
    await mongoose.connect(MONGO_URI);
    console.log("connection successfull ! congrats")

} catch (error){
    console.error("connection failed ")
    process.exit(0);}
}
connectDB()


app.listen(port, () => {
  console.log(`connected to db & listening on port ${port}` )
})


