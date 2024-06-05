import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({
    locations:{
        type: [[Number]],
        required: true
    },


});

const Location =mongoose.model("Location",locationSchema);
export default Location;