import express from "express";
import * as dotenv from "dotenv"
import cors from 'cors'

import connectDB from "./mongodb/connect.js";
dotenv.config();

const app = express();
app.use(cors());

app.use(express.json({ limit: "50mb" }));

app.get('/', (req, res) => {
    res.send({ message: "hello world" })
})

const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL)
        app.listen(process.env.PORT, ()=>console.log(`app is running on port http://localhost:${process.env.PORT}`))
    }
    catch (error) {
        console.log(error)
    }
}

startServer()