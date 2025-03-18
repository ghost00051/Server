import { Router } from "express";
import TaskController from "../controllers/task_controller.js";

const router = new Router();

router.post("/adding", TaskController.adding);
router.get("/comprasion/:id", TaskController.comprasion);

export default router;