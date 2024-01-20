import express from 'express'
import mongoose from 'mongoose'
import dotenv from "dotenv"
import userRoutes from "./routes/userRoute.js"
dotenv.config()

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.log(err);
})
const PORT = 3001

const app = express()

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})


app.use('/api/user', userRoutes)