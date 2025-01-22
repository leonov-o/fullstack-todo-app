import {TodoModel} from "../models/Todo";


class TodoService {
    async getAll() {
        return TodoModel.find();
    }

    async create(text: string) {
        return TodoModel.create({text});
    }

    async update(id: string, text: string, done: boolean) {
        return TodoModel.findByIdAndUpdate(id, {text, done});
    }

    async delete(id: string) {
        return TodoModel.findByIdAndDelete(id);
    }

}

export const todoService = new TodoService();
