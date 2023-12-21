// 'Import' the Express module instead of http
const express = require("express");
const dotenv = require("dotenv");
const axios = require("axios");
const mongoose = require('mongoose');
const Contact = require("./routers/Contact");
// Initialize the Express application
const app = express();


dotenv.config();

const PORT = process.env.PORT || 4040; // we use || to provide a default value

mongoose.connect(process.env.MONGODB)

const db = mongoose.connection

db.on("error", console.error.bind(console, "Connection Error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);


const logging = (request, response, next) => {
  console.log(`${request.method} ${request.url} ${Date.now()}`);
  next();
};

// CORS Middleware
const cors = (req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};

app.use(cors);
app.use(express.json());
app.use(logging);



// Handle the request with HTTP GET method from http://localhost:4040/status
app.get("/status", (request, response) => {
   // Create the headers for response by default 200
   // Create the response body
   // End and return the response
  response.send(JSON.stringify({ message: "Service healthy" }));
});


app.get("/steamspy/:acquire", (request, response) => {
  // New Axios get request utilizing already made environment variable
  axios
    .get(`http://steamspy.com/api.php?request=${request.params.acquire}`)
    .then(spyData => {
      // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
      console.log(spyData.data);
      response.json(spyData.data)
    });
});

app.use("/Contactus", Contact);


// Tell the Express app to start listening
// Let the humans know I am running and listening on 4040
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
