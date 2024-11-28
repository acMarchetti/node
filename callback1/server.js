import { createServer } from "node:http";
import { readFile } from "node:fs";
const server = createServer((request, response) => {
  if (request) {
    console.log("request received");
    readFile("./response.json", { encoding: "utf-8" }, (error, data) => {
      if (error) {
        console.log(error);
        response.statusCode = 500;
        response.end();
        return;
      }
      response.statusCode = 200;
      response.setHeader("Content-type", "application/json");
      response.end(data);
    });
  }
});
server.listen(3000, () => {
  console.log("Local server is running");
});
