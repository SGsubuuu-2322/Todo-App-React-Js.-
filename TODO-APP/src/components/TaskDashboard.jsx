import React from "react";

const TaskDashboard = ({ tasks }) => {
  console.log(tasks);
  return (
    <>
      <div className="dashboard-container w-full p-3">
        <div className="dashboard-wrapper bg-primary-text"></div>
      </div>
    </>
  );
};

export default TaskDashboard;
