import React from 'react';

const Form = () => {
  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 mb-2">受電時刻 (FROM)</label>
          <div className=' flex justify-center items-center'>
            <input type="date" className="w-full border border-gray-300 rounded-md p-2 mr-3" />
            <input type="time" className="w-full border border-gray-300 rounded-md p-2" />
          </div>
        </div>
        <div>
          <label className="block text-gray-700 mb-2">受電時刻 (TO)</label>
          <div className=' flex justify-center items-center'>
            <input type="date" className="w-full border border-gray-300 rounded-md p-2 mr-3" />
            <input type="time" className="w-full border border-gray-300 rounded-md p-2" />
          </div>
        </div>
      </div>

    </form>
  );
};

export default Form;
