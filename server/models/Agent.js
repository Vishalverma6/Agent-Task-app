const mongoose = require("mongoose");

const agentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    phone:{
        type:String,
        required:true,
    },
},
 {timestamps:true},

);

module.exports = mongoose.model("Agent",agentSchema);