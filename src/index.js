
import dotenv from "dotenv"

import mongoConnection from './db/index.js'

dotenv.config({path:"./env"
})

mongoConnection()