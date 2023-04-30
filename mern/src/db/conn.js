const mongoose = require("mongoose");



mongoose.connect(`mongodb+srv://vinaysharma:vinay123@vinay-cluster.jofpuxk.mongodb.net/studentId?retryWrites=true&w=majority`,{
    
}).then(() =>{
    console.log("Connection successful")
}).catch((err) =>{
    console.log(err)
});
