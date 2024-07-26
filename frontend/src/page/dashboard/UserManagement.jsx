import React from 'react';
import UserTable from '../../component/dashboard/UserTable';
import MainTitle from '../../component/dashboard/MainTitle';
import Breadcrumb from '../../component/dashboard/Breadcrumb';
import Container from '../../component/dashboard/Container';

const UserManagement = () => {
  return (
    <Container>
      <div>
        <Breadcrumb />
        <MainTitle title="利用者管理" />
      </div>
      <UserTable />
    </Container>
  );
};

export default UserManagement;