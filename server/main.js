const express = require("express");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");
const multer = require("multer");
const path = require("path");

app.use(express.json());
app.use(cors());