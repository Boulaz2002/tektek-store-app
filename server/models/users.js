const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name : {
        type:String ,
        required:true,
    } ,
    email: {
      type: String,
      required:true,
      trim: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    temporarytoken: {
        type: String,
        required:true,
    },
    active: {
        type: Boolean,
        required:true,
        default: false
    },
    googleId: {
        type:String ,
            
    } ,
    role: {
        type: String,
        required: true,
        default:"basic",
        enum: ["basic", "supervisor", "admin", "super_admin"]
        //roles customer and admin
    },
});

module.exports = User = mongoose.model("users", UserSchema);