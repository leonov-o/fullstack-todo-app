import React, {useState} from 'react';
import {todoService} from "../models/todo/todo.service.ts";
import {useQueryClient} from "react-query";

const AddTodo: React.FC = () => {
    const queryClient = useQueryClient();
    const [todo, setTodo] = useState('');

    const handleAddTodo = () => {
        if (todo.trim()) {
            todoService.create(todo).then(() => queryClient.invalidateQueries('todos'));
            setTodo('');
        }
    };

    return (
        <div className="flex items-center gap-2 py-4">
            <input
                type="text"
                placeholder="Add a new todo..."
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                className="w-full rounded border px-4 py-2 focus:outline-none"
            />
            <button
                onClick={handleAddTodo}
                className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
                Add
            </button>
        </div>
    );
};

export default AddTodo;
