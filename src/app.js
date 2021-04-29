const express = require("express");
require("../src/db/conn")
const app = express();
app.use(express.json())
const Contact = require("../src/models/contact");
const router = require("./routers/contact-rout");

const port = process.env.PORT || 3000;

app.use(router)


app.listen(port,() => {
       console.log(`Connection is live at port no.${port}`);



})