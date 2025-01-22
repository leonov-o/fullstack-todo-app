import mongoose, {Schema, Model, Document} from "mongoose";


export interface ITodo extends Document {
    id: string;
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

todoSchema.set('toJSON', {
    transform: (_, ret) => {
        ret.id = ret._id.toString();
        delete ret._id;
        delete ret.__v;
    }
});


export const TodoModel : Model<ITodo> = mongoose.model<ITodo>("Todo", todoSchema);
