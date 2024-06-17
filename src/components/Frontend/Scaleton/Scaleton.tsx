import React from "react";

const Scaleton: React.FC = () => {
  return (
    <div role="status" className="max-w-lg animate-pulse space-y-2.5">
      <div className="flex w-full items-center">
        <div className="bg-gray-200 dark:bg-gray-700 h-2.5 w-32 rounded-full"></div>
        <div className="bg-gray-300 dark:bg-gray-600 ms-2 h-2.5 w-24 rounded-full"></div>
        <div className="bg-gray-300 dark:bg-gray-600 ms-2 h-2.5 w-full rounded-full"></div>
      </div>
      <div className="flex w-full max-w-[480px] items-center">
        <div className="bg-gray-200 dark:bg-gray-700 h-2.5 w-full rounded-full"></div>
        <div className="bg-gray-300 dark:bg-gray-600 ms-2 h-2.5 w-full rounded-full"></div>
        <div className="bg-gray-300 dark:bg-gray-600 ms-2 h-2.5 w-24 rounded-full"></div>
      </div>
      <div className="flex w-full max-w-[400px] items-center">
        <div className="bg-gray-300 dark:bg-gray-600 h-2.5 w-full rounded-full"></div>
        <div className="bg-gray-200 dark:bg-gray-700 ms-2 h-2.5 w-80 rounded-full"></div>
        <div className="bg-gray-300 dark:bg-gray-600 ms-2 h-2.5 w-full rounded-full"></div>
      </div>
      <div className="flex w-full max-w-[480px] items-center">
        <div className="bg-gray-200 dark:bg-gray-700 ms-2 h-2.5 w-full rounded-full"></div>
        <div className="bg-gray-300 dark:bg-gray-600 ms-2 h-2.5 w-full rounded-full"></div>
        <div className="bg-gray-300 dark:bg-gray-600 ms-2 h-2.5 w-24 rounded-full"></div>
      </div>
      <div className="flex w-full max-w-[440px] items-center">
        <div className="bg-gray-300 dark:bg-gray-600 ms-2 h-2.5 w-32 rounded-full"></div>
        <div className="bg-gray-300 dark:bg-gray-600 ms-2 h-2.5 w-24 rounded-full"></div>
        <div className="bg-gray-200 dark:bg-gray-700 ms-2 h-2.5 w-full rounded-full"></div>
      </div>
      <div className="flex w-full max-w-[360px] items-center">
        <div className="bg-gray-300 dark:bg-gray-600 ms-2 h-2.5 w-full rounded-full"></div>
        <div className="bg-gray-200 dark:bg-gray-700 ms-2 h-2.5 w-80 rounded-full"></div>
        <div className="bg-gray-300 dark:bg-gray-600 ms-2 h-2.5 w-full rounded-full"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Scaleton;
