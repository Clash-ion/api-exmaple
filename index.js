const express = require("express")
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 80;

app.use(express.json())
app.use(express.urlencoded())

app.get("/", (req,res) =>{
    res.json({"hello" : "hi"})
})

app.post("/api/v1/takeEmail/", (req,res) => {
    
    var {email} = req.body
    console.log(email)
    res.status(200).json({
        "success" : true
    })
})

app.listen(port, () => {
    console.log('server started at ${port}!')
})
// import express from "express"