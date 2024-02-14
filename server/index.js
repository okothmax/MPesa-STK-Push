const express = require("express");                   // To import express"nodejs framework"

const app = express();   
const cors = require("cors");   
const { default: axios } = require("axios");                          // To create express Application or invoke express function
const TokenRoute = require("./routes/token");

app.listen(5000, () =>{                               // To start the server on a specified port ie. 5000
  console.log("Server run perfectly!");               // Callback function which will be exexcuted when server starts succesfully
});

app.use(express.json());
app.use(cors({
  methods: ['GET', 'POST'],
}));
app.get("/",                                              // Handle get requests to a specific path which is the root("/")
(req, res) =>{res.send("Mpesa Programming in progress");  // Callback function which get executed when the router is hit
});

app.use("/token", TokenRoute);