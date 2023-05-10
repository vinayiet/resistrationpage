const express = require("express");

const path = require('path');
const app = express();
const hbs = require("hbs");
require("./db/conn")
const { json } = require("express")

const Register = require("./models/registers");



const port = process.env.PORT || 3000


// connecting html document with the app.js
const static_path = path.join(__dirname, "../public")

const template_path = path.join(__dirname, "../templates/views")
// adding the partials to the app.js

const partials_path = path.join(__dirname, "../templates/partials")


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// console.log(path.join(__dirname,"../public"))

app.use(express.static(static_path))



//app.set is used to connect hbs 
app.set("view engine", "hbs")

//adding views to the app.js
app.set("views", template_path)

//registering the hbs file into the app.js
hbs.registerPartials(partials_path);

app.get("/index", (req, res) => {
    res.render("index")
});

app.get("/login", (req, res) => {
    res.render("login")
});
app.get("/register", (req, res) => {
    res.render("register")
});
// create a new user in our database
app.post("/register", async (req, res) => {
    try {
        // console.log(req.body.name);
        // res.send(req.body.name)

        const registerStudent = new Register({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password

        })
        const registered = await registerStudent.save();
        res.status(201).render("index")

    } catch (error) {
        res.status(400).send(error);
    }
});


// login check 
app.post("/login", async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const useremail = await Register.findOne({ email: email });
       if(useremail.password === password){
            res.status(201).render("index");
       }else{
           res.send("password or email is not correct!");
       }

    } catch (error) {
        res.status(400).send("invalid email")
    }
});

app.listen(port, () => {
    console.log(`Our server in running at ${port}`)
})