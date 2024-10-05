//DEFINING SCHEMA

import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: { type: String, require: true, trime: true },
    email: { type: String, require: true, trime: true, unique: true },
    password: { type: String, require: true, trime: true },
    join: { type: Date, default: Date.now }
})

//COMPILING SCHEMA
const UserModel = mongoose.model('user', userSchema)
export default UserModel