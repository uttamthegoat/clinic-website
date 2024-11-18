/* eslint-disable no-unused-vars */
import Admin from '../models/admin.model.js'
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'
import generateToken from '../utils/generateToken.js'
import ExpressError from '../utils/ExpressError.js'

dotenv.config()

export const registerUser = async (req, res) => {
    const { email, password } = req.body;
    const admin = await Admin.create({ email, password });
    
    res.status(201).json({
        success: true,
        message: 'Admin created successfully'
    });
}


export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    // Find user
    const admin = await Admin.findOne({ email });
    if (!admin) {
        throw new ExpressError(401, false, 'Wrong username');
    }

    // Check password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
        throw new ExpressError(401, false, 'Wrong password');
    }

    generateToken(res, admin._id);

    res.json({
        success: true,
        message: 'Logged in successfully'
    });
}

export const checkAuth = async (req, res) => {
    const token = req.cookies.access_token
    if (!token) {
      return res.status(401).json({
        success: false,
        status: 'logout',
      })
    }
    res.status(200).send({ success: true, message: 'You are already signed in!' })
}

export const logoutUser = async (req, res) => {
    res.clearCookie("access_token", { httpOnly: true});
    res.status(200).json({ success: true, message: "Logged out successfully!" });
  };