export interface ITodo {
    id: string;
    text: string;
    done: boolean;
}

export interface ITodoResponse {
    success: boolean,
    data: ITodo | ITodo[] | null,
    message: string | null
}
