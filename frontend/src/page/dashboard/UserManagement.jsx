import React from 'react';
import UserTable from '../../component/dashboard/UserTable';
import MainTitle from '../../component/dashboard/MainTitle';
import Breadcrumb from '../../component/dashboard/Breadcrumb';

const UserManagement = () => {
  return (
    <div className='p-10'>
      <div className="p-4">
        <Breadcrumb />
        <MainTitle title="利用者管理" />
      </div>
      <UserTable />
    </div>
  );
};

export default UserManagement;