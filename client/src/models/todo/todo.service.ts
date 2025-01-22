import {ITodo, ITodoResponse} from "./todo.types.ts";

const URL = import.meta.env.VITE_SERVER_URL;


class TodoService {

    async getAll() : Promise<ITodoResponse> {
        const response = await fetch(`${URL}/api/todos`, {
            method: 'GET'
        });
        return response.json();
    }

    async create(text: ITodo["text"]): Promise<ITodoResponse> {
        const response = await fetch(`${URL}/api/todos`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({text})
        });
        return response.json();
    }

    async update({id, text, done}: ITodo): Promise<ITodoResponse> {
        const response = await fetch(`${URL}/api/todos/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({text, done})
        });
        return response.json();
    }

    async delete(id: ITodo["id"]): Promise<ITodoResponse> {
        const response = await fetch(`${URL}/api/todos/${id}`, {
            method: 'DELETE'
        });
        return response.json();
    }

}

export const todoService = new TodoService();
