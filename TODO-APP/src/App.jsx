import { useState } from "react";
import "./App.css";
import TaskAdditionForm from "./components/TaskAdditionForm";
import TaskDashboard from "./components/TaskDashboard";
import TaskDisplayBoard from "./components/TaskDisplayBoard";

function App() {
  const [task, setTask] = useState({
    taskId: crypto.randomUUID(),
    taskInput: "",
    completion: false,
    taskPriority: "low",
    taskCategory: "personal",
    taskDueDate: "",
  });

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  return (
    <>
      <div className="app-container w-full h-[100vh] bg-primary-bg">
        <TaskDashboard tasks={tasks} />
        <TaskAdditionForm task={task} setTask={setTask} setTasks={setTasks} />
        <TaskDisplayBoard tasks={tasks} setTasks={setTasks} />
      </div>
    </>
  );
}

export default App;
