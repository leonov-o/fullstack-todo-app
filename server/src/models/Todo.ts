import mongoose, {Schema, Model, Document} from "mongoose";


export interface ITodo extends Document {
    text: string;
    done: boolean;
}

const todoSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

export const TodoModel : Model<ITodo> = mongoose.model<ITodo>("Todo", todoSchema);
