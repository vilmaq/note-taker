// require node modules

const express = require("express");
const cors = require("cors");
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");
// port number where the server listens
const PORT = process.env.PORT || 3001;

const app = express();
//add middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(`App listening to http://localhost:${PORT}`);
});

// handleRequest function - the function that is executed when a request comes in, and it is always prepped with 2 params: request and response
// const handleRequest = (req, res) => {
//   let requestData = "";

//   const onData = (data) => {
//     requestData == data;
//   };

//   const onEnd = () => {
//     console.log(`You did a ${req_method} with the data:\n, ${requestData}`);
//     res.end("Done");
//   };
//   //when the server receives data - "on" => node js method
//   req.on("data", onData);
//   //when the request ends
//   req.on("end", onEnd);
// };

// const onSuccessfulOpen = () => {
//   console.log(`Server listening on: http://localhost:${PORT}`);
// };
// //create the Server instance
// const server = http.createServer(handleRequest);

// // Start server
// server.listen(PORT, onSuccessfulOpen);
