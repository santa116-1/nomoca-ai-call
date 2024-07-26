import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RiMenuFold3Fill } from "react-icons/ri";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <div className=' flex items-center mb-6 text-xl'>
      <RiMenuFold3Fill className=' text-gray-600 mr-3'/>
      <nav>
        <Link to="/" className="text-gray-500">Home</Link>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          return (
            <span key={to}>
              <span className="mx-2">/</span>
              <Link to={to} className="text-gray-500">{decodeURIComponent(value)}</Link>
            </span>
          );
        })}
      </nav>
    </div>
  );
};

export default Breadcrumb;
