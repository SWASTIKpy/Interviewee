const express = require('express')
const authController = require("../controllers/auth.controller")
const authRouter = express.Router()

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 */

authRouter.post("/register", authController.registerUserController){
    const { username, email, password } = req.body

    if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields are required" })
    }

    const isUserAlreadyExists = await userModel.findOne({ $or: [{ username }, { email }] })
}

module.exports = authRouter