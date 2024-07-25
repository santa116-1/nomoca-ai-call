import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import RootLayout from "./RootLayout";
import InitPage from "./InitPage";
import ClientErrorPage from "./ClientErrorPage";
import HomeTab from "./HomeTab";
import Result from "./Result";
import UserManagement from "./UserManagement";

const DashboardRouter = () => {
  const selectedSiteName = useSelector((state) => state.site.siteName);
  console.log(selectedSiteName);

  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<HomeTab/>} />
        <Route path="/result" element={<Result />} />
        <Route path="/home" element={<InitPage />} />
        <Route path="/user-info" element={<UserManagement />} />
        <Route path="*" element={<ClientErrorPage />} />
      </Routes>
    </RootLayout>

  );
};

export default DashboardRouter;



