import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    description: { type: String, required: true },
    completed: { type: Boolean, required: true },
  },
  { timestamps: true }
);

const Task = mongoose.model("Tasks", TaskSchema);

export default Task;
