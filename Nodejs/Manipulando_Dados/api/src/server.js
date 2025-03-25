import http from "node:http";
import { jsonBodyHandler } from "./Middleware/jsonHandler.js";
import { routeHandler } from "./Middleware/routesHandler.js";

const server = http.createServer(async (request, response) => {
  await jsonBodyHandler(request, response);
  routeHandler(request, response);
});

server.listen(3333);
