const mongoose = require("mongoose")

module.exports.dbConnect = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true})
        console.log("db connected")
    } catch (error) {
        console.log("Error while connecting db ", error)
        process.exit(0)
    }
}