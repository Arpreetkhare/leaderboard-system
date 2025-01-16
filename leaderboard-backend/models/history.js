const mongoose = require("mongoose");

const HistorySchema = new mongoose.Schema({
    points_awarded : {type : Number , required : true},
    claimed_at : { type : Date , default : Date.now},
    user_id : { 
        type : mongoose.Schema.Types.ObjectId, 
        ref: "User",
        required: true,
    }
})

module.exports = mongoose.model("History", HistorySchema);