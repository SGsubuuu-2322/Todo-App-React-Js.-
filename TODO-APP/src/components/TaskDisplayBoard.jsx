import React from "react";
import { Check, CircleX } from "lucide-react";

const TaskDisplayBoard = ({ tasks, setTasks }) => {
  const toggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.taskId === taskId ? { ...task, completion: !task.completion } : task
    );

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.taskId !== taskId);

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };

  return (
    <>
      <div className="task-display-board-container w-full px-3 py-2 mt-4">
        <div className="display-board-wrapper flex gap-3.5 justify-center items-center flex-wrap">
          {tasks.map((task, index) => (
            <div
              className="task-contaienr bg-primary-text text-primary-bg text-lg font-medium px-3 py-3.5 rounded-lg flex flex-col justify-center items-center gap-4 hover:scale-105 duration-200 cursor-pointer shadow-xl/30 shadow-white"
              key={index}
            >
              <div className="task-box flex justify-center items-center gap-4">
                <div className="task-wrapper flex justify-center items-center gap-2">
                  <span className="checbox flex items-center justify-center">
                    <button
                      onClick={() => toggleTask(task?.taskId)}
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors cursor-pointer ${
                        task?.completion
                          ? "bg-secondary-bg border-primary-bg text-white"
                          : "border-border-shadow hover:border-secondary-bg"
                      }`}
                    >
                      {task?.completion && <Check size={16} />}
                    </button>
                  </span>
                  <span className="task-name">{task.taskInput}</span>
                </div>
                <div className="task-edit-btns">
                  <span className="delete-btn flex items-center justify-center">
                    <button
                      onClick={() => deleteTask(task?.taskId)}
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors cursor-pointer text-secondary-bg`}
                    >
                      <CircleX size={26} />
                    </button>
                  </span>
                </div>
              </div>
              <div className="task-dtls-box flex gap-1.5">
                <span className="task-priority px-2 py-1 bg-secondary-bg rounded-3xl shadow-md shadow-border-shadow hover:text-primary-text">
                  {task.taskPriority}
                </span>
                <span className="task-category px-2 py-1 bg-secondary-bg rounded-3xl shadow-md shadow-border-shadow hover:text-primary-text">
                  {task.taskCategory}
                </span>
                <span className="task-due-date px-2 py-1 bg-secondary-bg rounded-3xl shadow-md shadow-border-shadow hover:text-primary-text">
                  {task.taskDueDate}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TaskDisplayBoard;
