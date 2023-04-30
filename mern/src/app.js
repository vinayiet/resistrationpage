const express = require("express");

const path = require('path');
const app = express();
 require("./db/conn")


const port = process.env.PORT || 3000

// const static_path = path.join

console.log(path.join)

// app.use(express.static())

app.get("/", (req, res) =>{
    res.send("hello from vinay")
});

app.listen(port, ()=>{
    console.log(`Our server in running at ${port}`)
})