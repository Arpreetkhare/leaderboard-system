const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    user_id: {type : String },
    name : {type : String , required :true},
    total_points : {type : Number , default : 0},
}); 

module.exports = mongoose.model("user" , UserSchema);