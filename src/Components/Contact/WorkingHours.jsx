import React from "react";

const WorkingHours = () => {
  return (
    <>
      <div className="w-44 px-1 py-2 rounded-lg shadow-xl">
        <h3 className="text-center text-xl font-bold text-green-400">
          Working Hours
        </h3>
      </div>
      <div className="*:text-white *:font-bold bg-slate-700 px-4 py-10 lg:w-3/5 rounded-lg">
        <div className="flex items-center gap-2">
          <span className="flex items-center text-xl font-semibold gap-2 w-52">
            Sunday - Thursday
          </span>
          <span>:</span>
          <span className="font-medium">10AM - 8PM</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center text-xl font-semibold gap-2 w-52">
            Saturday
          </span>
          <span>:</span>
          <span className="font-medium">5PM - 9PM</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center text-xl font-semibold gap-2 w-52">
            Friday
          </span>
          <span>:</span>
          <span className="font-medium">Closed</span>
        </div>
      </div>
    </>
  );
};

export default WorkingHours;
