const path = require("path")

require("dotenv").config({ path: path.join(__dirname, "../.env") })

const app = require("./app.js")
const connectToDB = require("./config/database.js")

const PORT = process.env.PORT || 3000

async function startServer() {
    try {
        const missingEnvVars = ["MONGO_URI", "JWT_SECRET"].filter((envVar) => !process.env[envVar])

        if (missingEnvVars.length > 0) {
            throw new Error(`Missing required environment variables: ${missingEnvVars.join(", ")}`)
        }

        await connectToDB()

        app.listen(PORT, () => {
            console.log(`srv running on ${PORT}`)
        })
    } catch (err) {
        console.error("Failed to start server:", err.message)
        process.exit(1)
    }
}

startServer()
