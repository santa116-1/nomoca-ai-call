import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

import { chartOptions } from '../../data/data';


const Loan = () => {
  const [series] = useState([44, 32, 17]);
  const [options] = useState(chartOptions);
  return (
    <div className="bg-gray-100 h-full w-full rounded-2xl p-5 border-[1px] overflow-hidden">
      <div className="flex items-center gap-12 my-3">
        <div>
          <p className="text-[28px] font-semibold">用件(概要)</p>
        </div>
      </div>
      <div className=" flex items-center justify-between">
        <div className="">
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
