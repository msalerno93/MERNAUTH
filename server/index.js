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

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error'

    return res.status(statusCode).json({
        success: false,
        message,
        statusCode
    })
})