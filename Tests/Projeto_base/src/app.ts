import http from "node:http";

const products = [
  { id: 1, name: "camisa", price: 29.99 },
  { id: 2, name: "jaqueta", price: 129.99 },
  { id: 3, name: "bota", price: 50.99 },
];

const app = http.createServer((request, response) => {
  if (request.method === "GET" && request.url === "/products") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify(products));
  }
});

export { app };
