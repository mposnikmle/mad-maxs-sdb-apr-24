require("dotenv").config();
const express = require("express");
const app = express();
const petController = require("./controllers/pet.controller")

const PORT = process.env.PORT;

app.use(express.json()); // this will parse any json data that is sent with the request

app.use("/pet", petController);

app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`);
});