const express = require("express")

require("dotenv").config()

const morgan = require("morgan")

const cors = require("cors")

const { dbConnect } = require("../utils/dbConnect")

const router = require("./routes")

const PORT = process.env.PORT || 4321

// initiate app
const app = express()

dbConnect();

// middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

// link router
app.use("/api/v1", router)



app.listen(PORT, () => console.log(`App is listening at PORT ${PORT}`))