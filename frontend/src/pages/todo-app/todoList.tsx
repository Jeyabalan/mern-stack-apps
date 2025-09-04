import React, { useEffect, useState } from "react";
import { Task } from "../../interfaces";
import api from "../../axios-config";

export default function TodoList({ taskList }: { taskList: Task[] }) {
  const [tasks, setTasks] = useState<Task[]>(taskList);

  const getTasks = async () => {
    const res = await api.get("/task");
    setTasks([...res.data]);
  };

  useEffect(() => {
    getTasks();
  }, [taskList]);

  const taskCompleted = async (id: string) => {
    await api.patch(`/task/${id}`, { completed: true });
    getTasks();
  };

  const deleteTask = async (id: string) => {
    await api.delete(`/task/${id}`);
    getTasks();
  };

  return (
    <table className="min-w-full border-collapse border border-gray-300 mt-6">
      <thead className="bg-gray-200 w-full">
        <tr>
          <th className="border border-cyan-800 p-2">S.No</th>
          <th className="border border-cyan-800 p-2">Task Description</th>
          <th className="border border-cyan-800 p-2">Completed</th>
          <th className="border border-cyan-800 p-2">Actions</th>
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
          <tr key={task._id}>
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
              className={`flex justify-center gap-5 border border-cyan-800 p-2 text-center ${
                task.completed ? "line-through text-gray-400" : ""
              }`}
            >
              <button
                type="button"
                disabled={task.completed}
                onClick={() => !task.completed && taskCompleted(task._id)}
                className={`border shadow p-2 rounded-md  ${
                  task.completed
                    ? "bg-blue-50 cursor-not-allowed hover:bg-blue-50"
                    : "bg-blue-400 hover:bg-blue-500 text-white"
                }`}
              >
                Done
              </button>
              <button
                type="button"
                disabled={task.completed}
                onClick={() => deleteTask(task._id)}
                className={`border shadow p-2 rounded-md bg-gray-400 ${
                  task.completed
                    ? "hover:bg-gray-400 cursor-not-allowed"
                    : "hover:bg-gray-500"
                } text-white`}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
