
import React from 'react';
const SearchInput = () => {

  return (
    <div className="p-6">
      <div className="flex items-center mb-6">
        <div className="w-1/3">
          <label className="block text-gray-700 mb-2">医院名</label>
          <select className="w-full p-2 border border-gray-300 rounded">
            <option>UR内科クリニック</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="flex space-x-4">
          <div>
            <label className="block text-gray-700 mb-2">受電時刻 (FROM)</label>
            <input type="date" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">受電時刻 (TO)</label>
            <input type="date" className="w-full p-2 border border-gray-300 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
