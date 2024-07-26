import React from 'react';
import DashTable from '../../component/dashboard/DashTable';
import Breadcrumb from '../../component/dashboard/Breadcrumb';
import MainTitle from '../../component/dashboard/MainTitle';
import Form from '../../component/dashboard/Form';
import Container from '../../component/dashboard/Container';

const Result = () => {
  return (
    <Container>
      <div>
        <Breadcrumb />
        <MainTitle title="受電結果" />
        <Form />
      </div>
      <DashTable />
    </Container>
  );
};

export default Result;