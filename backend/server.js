const express = require("express");
const bodyParser = require("body-parser");
const notes =require("./data/notes")
const dotenv = require("dotenv").config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res){
    res.send("Hello");
});

app.get("/api/notes",(req,res)=>{
    res.json(notes)
})

app.get("/api/notes/:id",(req,res)=>{
    const note = notes.find((n)=>n._id===req.params.id);
    res.send(note)
})

app.listen(process.env.PORT, function () {
    console.log(`Server is running on port ${process.env.PORT}`);
});