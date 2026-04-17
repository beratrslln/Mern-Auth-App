//server.js

const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();
//cors port uyuşmazlığını düzeltir reactın çalıştığı port ile bağlantı kurmamızı sağlar.
app.use(cors());

require("./models/db");

//veriyi okumayı sağlar
app.use(express.json());

const registerRouter = require("./routes/authRoute") 
app.use(registerRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is running on ${PORT} port`);
});
