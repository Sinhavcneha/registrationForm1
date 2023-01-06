    const express = require("express");
    const mongoose = require("mongoose");
const bodyParser = require("body-parser");

    const app = express();
    mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/REGISTRSTION', {useNewUrlParser: true});
try {
    console.log("connection done");
} catch (error) {
    console.log("error");
}
    const Employee = require("./model/user");


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


    app.get("/" , function(req,res){


        res.sendFile(__dirname + "/register.html")
    });

    
    app.get("/form-submit",function(req,res){
        res.render("register");


    });
    app.post("/form-submit", async(req,res)=> {

const data = new Employee(req.body);
await data.save();
       
        res.write("<h1>Registration Successful</h1>");
        
        res.write("<p>Name : </p>"+ req.body.name);
        res.write("<p>email : </p>"+ req.body.email);
        res.write("<p>Password : </p>"+ req.body.password);
        res.write("<p>Repeatpassword : </p>"+ req.body.repeatPassword);
        res.end("Save Data");
        

    });try {
        console.log("connection done");
    } catch (error) {
        console.log("error");
    }

    
    app.listen(3000,function(){
console.log("server is running")

    });