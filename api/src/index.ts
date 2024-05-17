import express from "express"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import cors from "cors"
import dotenv from "dotenv"
import AuthRouter from "./routes/Auth"
import { pool } from "./config/db"
import Fingerprint from "express-fingerprint"

dotenv.config()

pool.initialize().then(() => {
    console.log("[server]: Data Source has been initialize!")
}).catch(error => {
    console.log("[server]: Error during Data Source initialization: ", error)
})

const PORT = process.env.PORT || 5000
const app = express()

app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}))

app.use(Fingerprint())

app.use(cookieParser())
app.use(bodyParser.json())

app.use("/auth", AuthRouter);

app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`)
})