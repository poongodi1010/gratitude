/* eslint-disable no-undef */

// https://zenquotes.io/api
const express = require("express");
const app = express();

const cros = require("cors");

app.use(
  cros({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  }),
);
app.get("/", (req, res) => {
  res.send("Welcome to CORS server 😁");
});
app.get("zenquotes.io/api/cors", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.send("This has CORS enabled 🎈");
});
app.listen("/api", () => {
  console.log("listening on port api");
});
