import { Router } from "express"
import { ProductsController } from "@/controllers/products-controller"
import { ensureAuthenticadted } from "@/middlewares/ensureAuthenticated"
import { verifyUserAuthorization } from "@/middlewares/verifyUserAuthorization"

const productsRoutes = Router()
const productsController = new ProductsController()

// Autenticação e autorização em todas as rotas seguir
// productsRoutes.use(verifyUserAuthorization(["sale", "admin"]))

productsRoutes.get("/", productsController.index)
productsRoutes.post("/",ensureAuthenticadted, verifyUserAuthorization(["sale", "admin"]), productsController.create)

export { productsRoutes }
