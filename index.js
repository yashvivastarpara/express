const express = require('express')
const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("welcome home page")
})

app.get("/signup",(req,res)=>{
    res.send("signup page")
})

app.get("/product",(req,res)=>{
    res.send("product page")
})

app.post("/login",(req,res)=>{
    res.send("login page")
    console.log(req.body);
})

app.post("/blog",(req,res)=>{
    res.send("blog page")
    console.log(req.body);
})

app.post("/product",(req,res)=>{
    res.send("product page")
    console.log(req.body);
})

app.post("/signin",(req,res)=>{
    res.send("signin page")
    console.log(req.body);
})
app.listen(9090,()=>{
    console.log("listining port 9090");
})