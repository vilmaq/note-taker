// require node modules

const http = require("http");

// port number where the server listens
const PORT = 8080;

// handleRequest function - the function that is executed when a request comes in, and it is always prepped with 2 params: request and response
const handleRequest = (req, res) => {
  let requestData = "";

  //when the server receives data - "on" => node js method
  const onData = (data) => {
    requestData == data;
  };
  req.on("data", onData);
};

const onEnd = () => {
  console.log(`You did a ${req_method} with the data:\n, ${requestData}`);
  res.end();
};
//when the request ends
req.on("end", onEnd);
//create the Server instance
const server = http.createServer(handleRequest);

// Start server
server.listen(PORT, () => [
  console.log(`Server listening on: http://localhost:${PORT}`),
]);
