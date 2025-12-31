import React from "react";

export default function ProductCard({ props }) {
  console.log("props data: ", props);
  return (
    <div className="w-[300px] rounded-md border bg-white dark:bg-gray-800 shadow-lg transition-colors duration-500">
      <img
        src={props.image}
        alt="Laptop"
        className="h-[200px] w-full rounded-t-md object-cover"
      />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold text-gray-900 dark:text-gray-100">
          {props.title}
        </h1>
        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
          {props.description}
        </p>
        <button
          type="button"
          className="mt-4 w-full rounded-sm bg-blue-600 px-2 py-1.5 text-sm font-semibold text-white shadow-sm focus-visible:outline-offset-2 focus-visible:outline-black dark:focus-visible:outline-white transition-all duration-300"
        >
          Read
        </button>
      </div>
    </div>
  );
}
