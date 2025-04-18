import { Database } from "../database.js";
import { routes } from "../Routes/routes.js";
import { extractQueryParams } from "../utils/extract-query-params.js";

const database = new Database();

export function routeHandler(request, response) {
  const route = routes.find((route) => {
    return route.method === request.method && route.path.test(request.url);
  });

  if (route) {
    const routeParams = request.url.match(route.path);
    const { query, ...params } = routeParams.groups;

    request.params = params;
    request.query = query ? extractQueryParams(query) : {};

    return route.controller({request, response, database});
  } else {
    return response.writeHead(404).end("Rota não encontrada!");
  }
}
