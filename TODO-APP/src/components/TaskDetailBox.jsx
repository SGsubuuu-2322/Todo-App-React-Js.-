import React from "react";

const TaskDetailBox = ({ property, value }) => {
  return (
    <>
      <div className="task-details-box cursor-pointer bg-secondary-bg w-[10rem] flex flex-col items-center justify-center shadow-xl/30 shadow-border-shadow rounded-3xl py-2 hover:scale-105 duration-200">
        <span className="text-2xl font-bold">{value}</span>
        <span className="font-medium">{property}</span>
      </div>
    </>
  );
};

export default TaskDetailBox;
