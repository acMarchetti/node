import { createServer } from "node:http";
const server = createServer((request, response) => {
  if (request) {
    console.log("request received");
    response.statusCode = 200;
    //response.setHeader("Content-Type", "text/html");
    response.setHeader("Content-type", "application/json");
    response.end(
      //"<html><body><h1>I'm coming from the server</h1></body></html>"
      JSON.stringify({ name: "mario" })
    );
  }
});
server.listen(3000, () => {
  console.log("Local server is running");
});
