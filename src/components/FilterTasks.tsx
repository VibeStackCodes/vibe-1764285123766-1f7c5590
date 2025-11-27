import React from 'react';

const FilterTasks: React.FC = () => {
  return (
    <div className="mb-4">
      <label htmlFor="filter" className="block text-sm font-medium text-gray-700">Filter by Status</label>
      <select id="filter" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-500">
        <option value="">All</option>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
    </div>
  );
};

export default FilterTasks;
