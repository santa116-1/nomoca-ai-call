import React from 'react';

const Form = () => {
  return (
    <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div>
        <label className="block text-gray-700 mb-2">クリニック</label>
        <select className="w-full border border-gray-300 rounded-md p-2">
          <option>ちば内科クリニック</option>
        </select>
      </div>
      <div>
        <label className="block text-gray-700 mb-2">用件 (概要)</label>
        <input type="text" className="w-full border border-gray-300 rounded-md p-2" />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">受電時刻 (FROM)</label>
        <input type="date" className="w-full border border-gray-300 rounded-md p-2" />
        <input type="time" className="w-full border border-gray-300 rounded-md p-2 mt-2" />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">受電時刻 (TO)</label>
        <input type="date" className="w-full border border-gray-300 rounded-md p-2" />
        <input type="time" className="w-full border border-gray-300 rounded-md p-2 mt-2" />
      </div>
    </form>
  );
};

export default Form;
