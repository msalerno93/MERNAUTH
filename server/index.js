import express from 'express'
import mongoose from 'mongoose'
import dotenv from "dotenv"
import userRoute from "./routes/userRoute.js"
import authRoute from "./routes/authRoute.js"

dotenv.config()

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.log(err);
})
const PORT = 3001

const app = express()

app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})


app.use('/api/user', userRoute)
app.use('/api/auth', authRoute)