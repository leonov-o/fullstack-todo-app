export interface ITodo {
    id: string;
    text: string;
    done: boolean;
}

interface ITodoResponseBase {
    success: boolean,
    message: string | null
}

export interface ITodoGetResponse extends ITodoResponseBase {
    data: ITodo[]
}

export interface ITodoResponse extends ITodoResponseBase {
    data: ITodo
}


