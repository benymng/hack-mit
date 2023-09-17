import React from 'react';

export default function Navbar() {
  return (
    <div className="w-full flex justify-between">
      <button className="w-full px-4 py-2 text-sm font-xl font-bold text-gray-700 hover:bg-gray-50 focus:relative">
        test
      </button>

      <button className="w-full px-4 py-2 text-sm font-lg text-gray-700 hover:bg-gray-50 focus:relative">
        View
      </button>

      <button className="w-full px-4 py-2 text-sm font-lg text-gray-700 hover:bg-gray-50 focus:relative">
        Delete
      </button>
    </div>
  );
}
