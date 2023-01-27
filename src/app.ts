import express, { Application, Request, Response } from "express";
import "dotenv/config"
import cors from "cors"
const morgan = require("morgan")
import { router } from "./routes";
import db from "./config/mongo"

const PORT:number | string = process.env.PORT || 3001
const app: Application = express()

app.use(morgan("dev"));
app.use(cors())
app.use(express.json())
app.use(router)
db().then(() => console.log('Conexion con base de datos'))
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}` )
})

