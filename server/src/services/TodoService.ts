import {TodoModel} from "../models/Todo";
import {ApiError} from "../exceptions/ApiError";


class TodoService {
    async getAll() {
        return TodoModel.find();
    }

    async create(text: string) {
        if (!text) throw ApiError.BadRequest('Text is required');
        return TodoModel.create({text});
    }

    async update(id: string, text: string, done: boolean) {
        if(!id) throw ApiError.BadRequest('Id is required');

        const todo = await TodoModel.findById(id);
        if(!todo) throw ApiError.NotFound();

        return TodoModel.findByIdAndUpdate(id, {text, done}, {returnOriginal: false});
    }

    async delete(id: string) {
        if(!id) throw ApiError.BadRequest('Id is required');

        const todo = await TodoModel.findById(id);
        if(!todo) throw ApiError.NotFound();

        return TodoModel.findByIdAndDelete(id);
    }

}

export const todoService = new TodoService();
