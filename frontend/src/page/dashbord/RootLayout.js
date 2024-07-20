import React, { useState } from 'react';
import { FiAlignJustify } from "react-icons/fi";
import TopBar from '../../component/common/TopBar';
import Header from '../../component/common/header';

export const metadata = {
  title: 'Article AI Generator',
  description: 'Article AI',
};


const RootLayout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  }
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen img-bg bg-cover bg-center bg-fixed">
          {/* <SideBar showSidebar={showSidebar} /> */}
          {/* xl:ml-[270px]  */}
          <div className=" relative">
            {/* <FiAlignJustify onClick={toggleSidebar} className="absolute xl:hidden right-4" size={30} /> */}
            <Header/>
            <TopBar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
