import React from "react";

const CardComponent = () => {
  return (
    <div className="mt-6 w-96 bg-white shadow-md rounded-lg overflow-hidden">
      <div className="relative h-56">
        <img
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt="card-image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h5 className="text-xl font-semibold text-gray-800 mb-2">
          UI/UX Review Check
        </h5>
        <p className="text-gray-600">
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot; where you can enjoy the main
          night life in Barcelona.
        </p>
      </div>
      <div className="p-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Read More
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
