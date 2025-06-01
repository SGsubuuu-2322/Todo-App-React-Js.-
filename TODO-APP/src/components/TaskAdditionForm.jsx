import React from "react";

const TaskAdditionForm = ({ task, setTask, setTasks }) => {
  const inputHandler = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const isTodayOrFuture = (inputDateStr) => {
    const inputDate = new Date(inputDateStr);
    const today = new Date();
    inputDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    return inputDate >= today;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.taskInput.trim() === "") {
      alert("Enter a task to submit/add the task to the list...");
      return;
    }

    if (!isTodayOrFuture(task.taskDueDate)) {
      alert("Add task for today or for future date...");
      return;
    }

    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = [...existingTasks, task];
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);

    setTask({
      taskId: crypto.randomUUID(),
      taskInput: "",
      completion: false,
      taskPriority: "low",
      taskCategory: "personal",
      taskDueDate: "",
    });

    alert("Task added successfully!");
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="todo-form flex flex-col items-center justify-center gap-2 bg-secondary-bg text-primary-text shadow-border-shadow shadow-xl/30 rounded-2xl p-2.5 py-8"
        >
          <div className="task-input-container w-full flex items-center justify-center gap-2">
            <div className="input-container">
              <input
                name="taskInput"
                value={task.taskInput}
                onChange={inputHandler}
                placeholder="What you want to work upon ?"
                className="outline-2 outline-primary-bg text-white rounded-[6px] h-[2rem] w-96 px-2 focus:bg-primary-text focus:outline-0 focus:text-primary-bg"
              />
            </div>

            <div className="button-container w-full flex justify-center">
              <button
                type="submit"
                className="my-auto p-2 px-3 bg-primary-bg text-primary-text rounded-xl cursor-pointer shadow-xl/30 shadow-black active:scale-105 duration-300"
              >
                Add Task
              </button>
            </div>
          </div>

          <div className="task-details-input-container flex justify-center items-center gap-2">
            <div className="input-container">
              <select
                name="taskPriority"
                value={task.taskPriority}
                onChange={inputHandler}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-bg cursor-pointer"
              >
                <option value="low" className="bg-border-shadow">
                  Low Priority
                </option>
                <option value="medium" className="bg-border-shadow">
                  Medium Priority
                </option>
                <option value="high" className="bg-border-shadow">
                  High Priority
                </option>
              </select>
            </div>
            <div className="input-container">
              <select
                name="taskCategory"
                value={task.taskCategory}
                onChange={inputHandler}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-bg cursor-pointer"
              >
                <option value="personal" className="bg-border-shadow">
                  Personal
                </option>
                <option value="work" className="bg-border-shadow">
                  Work
                </option>
                <option value="health" className="bg-border-shadow">
                  Health
                </option>
                <option value="shopping" className="bg-border-shadow">
                  Shopping
                </option>
              </select>
            </div>
            <div className="input-container">
              <input
                name="taskDueDate"
                type="date"
                value={task.taskDueDate}
                onChange={inputHandler}
                className="outline-1 outline-primary-text text-white rounded-[6px] px-3 py-2 focus:bg-primary-text focus:outline-0 focus:text-primary-bg"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default TaskAdditionForm;
