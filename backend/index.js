const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const errors = require("./misc/errors");

const app = express();

app.use(cors(options));
app.use(express.json());
app.use(cookieParser());

const routes = require("./routes");
