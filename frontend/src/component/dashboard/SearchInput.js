import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';
import './styles.css';

const CustomInput = ({ value, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="w-full p-2 border border-gray-300 rounded flex items-center justify-between"
  >
    <span className='mr-5'>{value || 'YYYY/MM/DD'}</span>
    <FaCalendarAlt />
  </button>
);

const SearchInput = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div>
      <div className="flex items-center mb-6 space-x-4">
        <div className="w-1/3">
          <label className="block text-gray-700 mb-2">医院名</label>
          <select className="w-full p-2 border border-gray-300 rounded">
            <option>UR内科クリニック</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="flex space-x-2 items-center">
          <div>
            <label className="block text-gray-700 mb-2">受電時刻 (FROM)</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              customInput={<CustomInput />}
              dateFormat="yyyy/MM/dd"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">受電時刻 (TO)</label>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              customInput={<CustomInput />}
              dateFormat="yyyy/MM/dd"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
