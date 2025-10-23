import { Router } from "express"
import { ProductsController } from "@/controllers/products-controller"
import { ensureAuthenticadted } from "@/middlewares/ensureAuthenticated"

const productsRoutes = Router()
const productsController = new ProductsController()

productsRoutes.get("/", productsController.index)
productsRoutes.post("/",ensureAuthenticadted, productsController.create)

export { productsRoutes }
