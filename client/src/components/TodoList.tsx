import React from 'react';
import {TodoListItem} from './TodoListItem';
import {useQuery, useQueryClient} from "react-query";
import {todoService} from "../models/todo/todo.service.ts";
import {ITodo} from "../models/todo/todo.types.ts";


const TodoList: React.FC = () => {
    const [todos, setTodos] = React.useState<ITodo[]>([]);

    const queryClient = useQueryClient();
    const {error, isLoading} = useQuery({
        queryKey: ['todos'],
        queryFn: todoService.getAll,
        select: (data) => data.data,
        onSuccess: (data) => setTodos(data),
        refetchOnWindowFocus: false,
        keepPreviousData: true
    });

    const handleUpdateTodo = (values: ITodo) => {
        setTodos((prev) => prev.map((todo) => todo.id === values.id ? values : todo));
        todoService.update(values).then(() => queryClient.invalidateQueries('todos'));
    };

    const handleDeleteTodo = (id: string) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
        todoService.delete(id).then(() => queryClient.invalidateQueries('todos'));
    };


    return (
        <div className="rounded-md bg-gray-100 p-4 shadow-md">
                {
                    isLoading ? (
                        <p>Loading todos...</p>
                    ) : error ? (
                        <p className="text-red-500">Failed to load todos. Please try again.</p>
                    ) : todos && Array.isArray(todos) && todos.length > 0 ? (
                        todos.map((todo) => (
                            <TodoListItem
                                key={todo.id}
                                id={todo.id}
                                text={todo.text}
                                isDone={todo.done}
                                onEdit={handleUpdateTodo}
                                onDelete={handleDeleteTodo}
                            />
                        ))
                    ) : (
                        <p>No todos found.</p>
                    )
                }
        </div>
    );
};

export default TodoList;
