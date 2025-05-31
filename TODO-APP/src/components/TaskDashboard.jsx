import React from "react";
import TaskDetailBox from "./TaskDetailBox";

const TaskDashboard = ({ tasks }) => {
  const overdueCount = tasks?.filter((task) => {
    if (!task.taskDueDate) return false;

    const dueDate = new Date(task.taskDueDate);
    const today = new Date();
    dueDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    return !task.completion && dueDate < today;
  }).length;
  return (
    <>
      <div className="dashboard-container w-full p-3 mb-2">
        <div className="dashboard-wrapper p-2 flex justify-center items-center gap-3 mt-5">
          <TaskDetailBox property={"Total Tasks"} value={tasks?.length} />
          <TaskDetailBox
            property={"Completed"}
            value={tasks?.filter((task) => task.completion == true).length}
          />
          <TaskDetailBox
            property={"Pending"}
            value={tasks?.filter((task) => task.completion != true).length}
          />
          <TaskDetailBox property={"Overdue"} value={overdueCount} />
        </div>
      </div>
    </>
  );
};

export default TaskDashboard;
