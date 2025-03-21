import { Router } from "express"
import UserController from "../controllers/users_controller.js"
import tokenHandle from "../middlewares/token_handler_middleware.js"; // Убедитесь, что путь правильный

const router = new Router()

router.post("/registration", UserController.registration)
router.post("/login", UserController.login)
router.get("/", UserController.getAll)
router.post("/get-email", tokenHandle(true), UserController.getEmail);
router.post("/getId", tokenHandle(true), UserController.getId);

export default router