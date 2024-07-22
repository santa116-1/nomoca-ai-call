import React from 'react';
import TopBar from '../../component/common/TopBar';
import Header from '../../component/common/header';

export const metadata = {
  title: 'Article AI Generator',
  description: 'Article AI',
};


const RootLayout = ({ children }) => {

  return (
    <html lang="en">
      <body>
        <div className="min-h-screen img-bg bg-cover bg-center bg-fixed">
          <div className=" relative">
            <Header/>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
