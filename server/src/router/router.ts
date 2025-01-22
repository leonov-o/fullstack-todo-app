import {Router} from "express";
import {todoController} from "../controllers/TodoController";

const router = Router();

router.get("/todos", todoController.getAll);
router.post("/todos", todoController.create);
router.put("/todos/:id", todoController.update);
router.delete("/todos/:id",  todoController.delete);

export default router;
