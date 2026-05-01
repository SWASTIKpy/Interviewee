const mongoose = require("mongoose")


async function connectToDB() {
    if (!process.env.MONGO_URI) {
        throw new Error("MONGO_URI is not defined in environment variables")
    }

    await mongoose.connect(process.env.MONGO_URI)
    console.log("connected to DB")
}

module.exports = connectToDB
