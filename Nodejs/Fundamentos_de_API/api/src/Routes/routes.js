import { parseRoutePath } from "../utils/parseRoutrPath.js";

export const routes = [
  {
    method: "GET",
    path: "/products",
    controller: (request, response) => {
      return response.end(JSON.stringify(request.query));
    },
  },

  {
    method: "POST",
    path: "/products",
    controller: (request, response) => {
      return response.writeHead(201).end(JSON.stringify(request.body));
    },
  },

  {
    method: "DELETE",
    path: "/products/:id",
    controller: (request, response) => {
      return response.end("Produto removido com ID: " + request.params.id);
    },
  },
].map((route) => ({
  ...route,
  path: parseRoutePath(route.path),
}));
