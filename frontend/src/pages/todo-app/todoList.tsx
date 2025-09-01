import React, { useEffect, useState } from "react";
import { Task } from "../../interfaces";

export default function TodoList({ taskList }: { taskList: Task[] }) {
  const [tasks, setTasks] = useState<Task[]>(taskList);

  useEffect(() => {
    if (tasks.length) {
      const list =
        taskList.filter((list: Task) => !tasks.find((t) => t.id === list.id)) ||
        [];
      setTasks([...tasks, ...list]);
    } else {
      setTasks([...taskList]);
    }
  }, [taskList]);

  const taskCompleted = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <table className="min-w-full border-collapse border border-gray-300 mt-6">
      <thead className="bg-gray-200 w-full">
        <tr>
          <th className="border border-cyan-800 p-2">S.No</th>
          <th className="border border-cyan-800 p-2">Task Description</th>
          <th className="border border-cyan-800 p-2">Completed</th>
          <th className="border border-cyan-800 p-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {tasks.length === 0 && (
          <tr>
            <td
              colSpan={4}
              className="text-center text-gray-400 border border-cyan-800 p-2"
            >
              No Tasks Found
            </td>
          </tr>
        )}
        {tasks.map((task: Task, index: number) => (
          <tr>
            <td
              className={`border border-cyan-800 p-2 text-center ${
                task.completed ? "line-through text-gray-400" : ""
              }`}
            >
              {index + 1}
            </td>
            <td
              className={`border border-cyan-800 p-2 text-center ${
                task.completed ? "line-through text-gray-400" : ""
              }`}
            >
              {task.description}
            </td>
            <td
              className={`border border-cyan-800 p-2 text-center ${
                task.completed ? "line-through text-gray-400" : ""
              }`}
            >
              {task.completed ? "true" : "false"}
            </td>
            <td
              className={`border border-cyan-800 p-2 text-center ${
                task.completed ? "line-through text-gray-400" : ""
              }`}
            >
              <button
                type="button"
                disabled={task.completed}
                onClick={() => !task.completed && taskCompleted(task.id)}
                className={`border shadow p-2 rounded-md  ${
                  task.completed
                    ? "bg-blue-50 cursor-not-allowed hover:bg-blue-50"
                    : "bg-blue-400 hover:bg-blue-500 text-white"
                }`}
              >
                Done
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
