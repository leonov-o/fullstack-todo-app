import {Request, Response, NextFunction} from "express";
import {todoService} from "../services/TodoService";

class TodoController {

    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const todos = await todoService.getAll();
            res.status(200).json({
                success: true,
                data: todos
            })
        } catch (e) {
            next(e)
        }
    }

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const todo = await todoService.create(req.body.text);
            res.status(200).json({
                success: true,
                data: todo
            })
        } catch (e) {
            next(e)
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const todo = await todoService.update(req.params.id, req.body.text, req.body.done);
            res.status(200).json({
                success: true,
                data: todo
            })
        } catch (e) {
            next(e)
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const todo = await todoService.delete(req.params.id);
            res.status(200).json({
                success: true,
                data: todo
            })
        } catch (e) {
            next(e)
        }
    }
}

export const todoController = new TodoController();
