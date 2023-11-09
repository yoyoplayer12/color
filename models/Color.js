//create mongoose schema for messages
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ColorSchema = new Schema({
    color1: {
        type: String,
        required: true,
    },
    color2: {
        type: String,
        required: true,
    },
    color3: {
        type: String,
        required: true,
    },
    color4: {
        type: String,
        required: true,
    },
    color5: {
        type: String,
        required: true,
    },
});
//export model to use in index.js
const Color = mongoose.model("Color", ColorSchema);
module.exports = Color;