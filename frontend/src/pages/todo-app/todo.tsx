import React, { useState } from "react";
import TodoList from "./todoList";
import { Task } from "../../interfaces";

export default function Todo() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState<string>("");

  const addTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (task.trim() === "") return;
    setTasks([
      ...tasks,
      { id: tasks.length + 1, completed: false, description: task },
    ]);
    setTask("");
  };

  const clearTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTask("");
  };

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="text-center font-bold text-xl"> Todo App </header>
      <main>
        <form className="max-w-lg mx-auto mt-4 p-4 border rounded shadow">
          <div className="block mb-4">
            <label
              htmlFor="task"
              className="block text-md font-bold text-gray-700"
            >
              Task Name
            </label>
            <input
              id="task"
              name="task"
              type="text"
              value={task}
              placeholder="Add Your Task"
              onChange={onTextChange}
              className="mt-2 w-full block border p-1 rounded-sm border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={clearTask}
              className="p-2 bg-gray-50 border shadow rounded-lg hover:bg-gray-200"
            >
              Clear
            </button>
            <button
              type="button"
              onClick={addTask}
              className={`p-2 text-white rounded-lg shadow ${
                task.trim() === ""
                  ? `bg-blue-300 cursor-not-allowed`
                  : `bg-blue-500 hover:bg-blue-600`
              }`}
            >
              Add Task
            </button>
          </div>
        </form>
      </main>
      <TodoList taskList={tasks} />
    </div>
  );
}
