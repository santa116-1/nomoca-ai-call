// import React from 'react';

// const Breadcrumb = () => {
//   return (
//     <nav className="text-sm mb-4">
//       <a href="/" className="text-gray-500">Home</a>
//       <span className="mx-2">/</span>
//       <span className="text-gray-500">受電結果 (管理者用)</span>
//     </nav>
//   );
// };

// export default Breadcrumb;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <nav className="text-sm mb-4">
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
  );
};

export default Breadcrumb;
