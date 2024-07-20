import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

import { chartOptions } from '../../data/data';


const Loan = () => {
  const [series] = useState([44, 32, 17]);
  const [options] = useState(chartOptions);
  return (
    <div className="bg-white w-full rounded-lg p-5 border-[1px] overflow-hidden">
      <div className="flex items-center gap-12 my-3">
        <div>
          <p className="text-gray-500">Total Debts</p>
          <h4 className="text-2xl font-bold text-gray-700">$10,02,000</h4>
        </div>
      </div>
      <div className="grid lg:grid-cols-12 gap-4 items-center justify-between">
        <div className="col-span-8">
          <ReactApexChart
            width={'100%'}
            height={'auto'}
            type="donut"
            options={options}
            series={series}
          />
        </div>
      </div>
    </div>
  );
};

export default Loan;
