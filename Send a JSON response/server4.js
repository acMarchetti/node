import { createServer } from "node:http";

const mars = JSON.stringify({ location: "Mars" });

const server = createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "application/json");
  response.setHeader("Content-Length", mars.length);
  response.end(mars);
});
server.listen(3000, () => {});
