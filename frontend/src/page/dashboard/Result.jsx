import React from 'react';
import DashTable from '../../component/dashboard/DashTable';
import Breadcrumb from '../../component/dashboard/Breadcrumb';
import MainTitle from '../../component/dashboard/MainTitle';
import Form from '../../component/dashboard/Form';

const Result = () => {
  return (
    <div>
      <div className="p-4">
        <Breadcrumb />
        <MainTitle title="受電結果" />
        <Form />
      </div>
      <DashTable />
    </div>
  );
};

export default Result;