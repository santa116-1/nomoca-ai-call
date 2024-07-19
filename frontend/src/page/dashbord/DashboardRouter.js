import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import RootLayout from "./RootLayout";
import InitPage from "./InitPage";
import ClientErrorPage from "./ClientErrorPage";
import ReceiveResult from "./ReceiveResult";

const DashboardRouter = () => {
  const selectedSiteName = useSelector((state) => state.site.siteName);
  console.log(selectedSiteName);

  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<InitPage/>} />
        <Route path="/savedkeywords" element={<ReceiveResult />} />
        <Route path="*" element={<ClientErrorPage />} />
      </Routes>
    </RootLayout>

  );
};

export default DashboardRouter;



