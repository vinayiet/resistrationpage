const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    password : {
        type: String,
        required:true,
        unique: true
    }
})
// we neeed to create a collection 


const Register = new mongoose.model("Register",studentSchema);

module.exports = Register;