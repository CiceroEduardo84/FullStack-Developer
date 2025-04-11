import { Request, Response } from "express";
import { AppError } from "../utils/appError";

export class ProductsController {
  /**
   * index - GET para listar vários registros.
   * show - GET para exibir um registro específico.
   * create - POST para criar um registro.
   * update - PUT para atualizar um registro.
   * remove - DELETE para deletar um registro.
   */

  index(request: Request, response: Response) {
    const { page, limit } = request.query;
    response.send(`Pagina ${page} de ${limit}`);
  }
  create(request: Request, response: Response) {
    const { name, price } = request.body;

    if (!name) {
      throw new AppError("Nome do produto é obrigatório!", 401);
    }

    if (name.trim().length < 6) {
      throw new AppError("Nome deve conter pelo menos 6 caracteres!");
    }

    if (!price) {
      throw new AppError("Preço do produto é obrigatórios", 401);
    }

    if (price < 0) {
      throw new AppError("Preço do produto não deve ser menor que zero.");
    }
    // throw new AppError("Erro de teste!");

    // response.send();
    response.status(200).json({ name, price, user_id: request.user_id });
  }
}
