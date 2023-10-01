import mongoose from "mongoose";
import toJSON from "./plugins/toJSON.plugin";

const TodoSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  label: {
    type: Object,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
});

TodoSchema.plugin(toJSON);

const Todo = mongoose.model("Todo", TodoSchema);

export default Todo;
