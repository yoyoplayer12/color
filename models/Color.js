//create mongoose schema for messages
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ColorSchema = new Schema({
    message: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
    username: {
        type: String,
        required: true,
    },
});
//export model to use in index.js
const Color = mongoose.model("Color", ColorSchema);
module.exports = Color;