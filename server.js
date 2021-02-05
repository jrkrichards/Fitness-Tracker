// Set up variables
const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up static files
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

// Setting up routes
const apiRoutes = require("./routes/api-routes")
const htmlRoutes = require("./routes/html-routes")

app.use("/", htmlRoutes);
// app.use(apiRoutes);

// Launching app
app.listen(PORT, () => {
  console.log(`App running on port: http://localhost:${PORT}`);
});