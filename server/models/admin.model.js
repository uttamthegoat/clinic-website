/* eslint-disable no-unused-vars */
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import ExpressError from '../utils/ExpressError.js'

const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    }
});

adminSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    try {
      this.password = await bcrypt.hash(this.password, 10);
      next();
    } catch (err) {
      next(new ExpressError(500, false, "Error hashing the password"));
    }
  });

const Admin = mongoose.model('Admin', adminSchema);

export default Admin;