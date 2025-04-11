import express, { Request, Response, NextFunction } from "express";
import { routes } from "./routes/index.routes";
import { AppError } from "./utils/appError";
import { ZodError } from "zod";

const PORT = 3333;
const app = express();
app.use(express.json());

// global middleware
// app.use(myMiddleware);
app.use(routes);

/**
 * 400(Bad request)-Erro do cliente.
 * 500(Internal Server Error): Erro interno do servidor.
 */
app.use((error: any, request: Request, response: Response, _: NextFunction) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({ message: error.message });
  }

  if (error instanceof ZodError) {
    response
      .status(400)
      .json({ message: "Validatipon error", issues: error.format()});
  }

  response.status(500).json({ message: error.message });
});

app.listen(PORT, () =>
  console.log(`Server is rinning at http://localhost:${PORT}`)
);
