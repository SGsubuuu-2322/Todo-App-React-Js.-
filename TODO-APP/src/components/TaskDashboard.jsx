import React from "react";

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
      <div className="dashboard-container w-full p-3">
        <div className="dashboard-wrapper p-2 flex justify-center items-center gap-2 mt-5">
          <div className="task-details-box bg-secondary-bg w-[10rem] flex flex-col items-center justify-center shadow-xl/30 shadow-border-shadow rounded-3xl py-2">
            {tasks?.length}
            <span>Total Tasks</span>
          </div>
          <div className="task-details-box bg-secondary-bg w-[10rem] flex flex-col items-center justify-center shadow-xl/30 shadow-border-shadow rounded-3xl py-2">
            {tasks?.filter((task) => task.completion == true).length}
            <span>Completed</span>
          </div>
          <div className="task-details-box bg-secondary-bg w-[10rem] flex flex-col items-center justify-center shadow-xl/30 shadow-border-shadow rounded-3xl py-2">
            {tasks?.filter((task) => task.completion != true).length}
            <span>Pending</span>
          </div>
          <div className="task-details-box bg-secondary-bg w-[10rem] flex flex-col items-center justify-center shadow-xl/30 shadow-border-shadow rounded-3xl py-2">
            {overdueCount}
            <span>Overdue</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskDashboard;
