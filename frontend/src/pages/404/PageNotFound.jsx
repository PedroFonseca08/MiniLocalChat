import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-gray-900 mb-4 dark:text-gray-50">404</h1>
        <p className="text-2xl text-gray-600 mb-8 dark:text-gray-400">Page not found</p>
        <Link to="/" className="bg-sky-400 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
