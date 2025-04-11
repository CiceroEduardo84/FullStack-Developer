import { Request, Response } from "express";
import { AppError } from "../utils/appError";
import z from "zod";

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
    const bodySchema = z.object({
      name: z
        .string({ required_error: "Name id required!" })
        .trim()
        .min(6, { message: "Name must be 6 or more caracters!" }),

      price: z
        .number({ required_error: "Price is required!" })
        .positive({ message: "Price must be positive!" })
        .nullish(),
    });

    const { name, price } = bodySchema.parse(request.body);

    // if (!name) {
    //   throw new AppError("Nome do produto é obrigatório!", 401);
    // }

    // if (name.trim().length < 6) {
    //   throw new AppError("Nome deve conter pelo menos 6 caracteres!");
    // }

    // if (!price) {
    //   throw new AppError("Preço do produto é obrigatórios", 401);
    // }

    // if (price < 0) {
    //   throw new AppError("Preço do produto não deve ser menor que zero.");
    // }
    // throw new AppError("Erro de teste!");

    // response.send();
    // response.status(200).json({ name, price, user_id: request.user_id });
  }
}
