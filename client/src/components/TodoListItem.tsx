import React, {useState} from 'react';
import {CheckIcon, Pencil1Icon, TrashIcon} from '@radix-ui/react-icons';
import {ITodo} from "../models/todo/todo.types.ts";

type TodoListItemProps = {
    id: string;
    text: string;
    isDone: boolean;
    onDelete: (id: string) => void;
    onEdit: (values: ITodo) => void;
};

export const TodoListItem: React.FC<TodoListItemProps> = ({id, text, isDone, onEdit, onDelete}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(text);

    const handleToggle = () => onEdit({id, text, done: !isDone});

    const handleEdit = () => {
        if (isEditing && editedText !== text) {
            onEdit({id, text: editedText, done: isDone});
        }
        setIsEditing(!isEditing);
    };

    return (
        <div className="flex items-center gap-4 border-b p-2">
            <input
                type="checkbox"
                checked={isDone}
                onChange={handleToggle}
                className="cursor-pointer"
            />
            {isEditing ? (
                <input
                    type="text"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                    className="h-6 grow resize-y overflow-hidden rounded border p-1"
                />
            ) : (
                <div className={`h-6 w-full grow truncate ${isDone ? 'text-gray-500 line-through' : ''}`}>
                    {text}
                </div>
            )}
            <button
                onClick={handleEdit}
                className="text-blue-500 hover:text-blue-700"
                aria-label="Edit Todo"
            >
                {isEditing ? <CheckIcon className="size-5"/> : <Pencil1Icon className="size-5"/>}
            </button>
            <button
                onClick={() => onDelete(id)}
                className="text-red-500 hover:text-red-700"
                aria-label="Delete Todo"
            >
                <TrashIcon className="size-5"/>
            </button>
        </div>
    );
};
