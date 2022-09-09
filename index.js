const express = require("express");
const mongoose = require("mongoose");

const mongoDbUri = 
("mongodb+srv://atlas:Atlaspassword1@cluster0.qcpse6h.mongodb.net/?retryWrites=true&w=majority")
const app= express();

mongoose
.connect(mongoDbUri)
.then(() => {
    console.log("Data base connection is successesfull");
})
.catch((err) => {
console.log(err);
});
 app.listen(5000, () =>{
    console.log("Our server is up and running on port 5000");
 });
