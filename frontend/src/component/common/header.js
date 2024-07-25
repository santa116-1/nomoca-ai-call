// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { RiLayoutMasonryFill } from "react-icons/ri";
// import { MdBarChart } from "react-icons/md";
// import { BsArrowClockwise } from "react-icons/bs";
// import { MdLogout } from "react-icons/md";
// import { googleLogout } from '@react-oauth/google';
// import { HiMiniPhoneArrowDownLeft } from "react-icons/hi2";
// import { MdPhoneCallback } from "react-icons/md";
// import { TiArrowSync } from "react-icons/ti";
// import { FaUserFriends } from "react-icons/fa";

// const Header = () => {
//   const navigate = useNavigate(); 
//   const handleLogout =()=>{
//       localStorage.removeItem("accessToken");
//       googleLogout();
//       navigate('/')
//   }

//   return (
//     <header>
//       <nav className="flex justify-between items-center bg-[#2978CA] h-16 px-20 text-xl">
//         <div className="flex items-center gap-7">
//           <h1 className="text-2xl font-semibold  flex-1 text-white">
//             NOMOCA - AI CALL
//           </h1>
//         </div>
//         <div className="flex items-center gap-7">
//           <div className="navbar flex items-center ml-5">
//             <button
//               onClick={() => navigate("/dashboard")}
//               className=" flex justify-center items-center gap-1 mr-4 p-2 rounded-md text-white "
//             >
//               <RiLayoutMasonryFill style={{ fontSize: '25px', marginRight: "5px" }} />
//               ダッシュボード
//             </button>
//             <button
//               onClick={() => navigate("/dashboard/result")}
//               className=" flex justify-center items-center gap-1 mr-4 p-2 rounded-md text-white "
//             >
//               <MdPhoneCallback style={{ fontSize: '25px', marginRight: "5px" }} />
//               通話結果
//             </button>
//             <button
//               onClick={() => navigate("/reset-password")}
//               className=" flex justify-center items-center gap-1 mr-4 p-2 rounded-md text-white "
//             >
//               <TiArrowSync style={{ fontSize: '25px', marginRight: "5px" }} />
//               パスワード変更
//             </button>
//             <button
//               onClick={() => navigate("/reset-password")}
//               className=" flex justify-center items-center gap-1 mr-4 p-2 rounded-md text-white "
//             >
//               <FaUserFriends style={{ fontSize: '25px', marginRight: "5px" }} />
//               利用者情報
//             </button>
//             <button
//           onClick={() => {
//             handleLogout();
//           }}
//               className=" flex justify-center items-center gap-1 mr-4 p-2 rounded-md text-white "
//             >
//               <MdLogout style={{ fontSize: '25px', marginRight: "5px" }} />
//               ログアウト
//             </button>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;


// Header.js
import React from 'react';
import { RiLayoutMasonryFill } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import { googleLogout } from '@react-oauth/google';
import { MdPhoneCallback } from "react-icons/md";
import { TiArrowSync } from "react-icons/ti";
import { FaUserFriends } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    googleLogout();
    navigate('/')
  }
  return (
    <header className="flex justify-between items-center p-4 bg-blue-900 text-white">
      <div className="text-xl font-bold">
        nomoca-ai call
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li className="flex items-center space-x-1">
            <RiLayoutMasonryFill className="h-5 w-5" />
            <Link to="/dashboard" className="hover:underline">ダッシュボード</Link>
          </li>
          <li className="flex items-center space-x-1">
            <MdPhoneCallback className="h-5 w-5" />
            <Link to="/dashboard/result" className="hover:underline">受電結果</Link>
          </li>
          <li className="flex items-center space-x-1">
            <FaUserFriends className="h-5 w-5" />
            <Link to="/dashboard/user-info" className="hover:underline">利用者情報</Link>
          </li>
          <li className="flex items-center space-x-1">
            <TiArrowSync className="h-5 w-5" />
            <Link to="/reset-password" className="hover:underline">パスワード変更</Link>
          </li>
          <li className="flex items-center space-x-1 cursor-pointer" onClick={handleLogout}>
            <MdLogout className="h-5 w-5" />
            <span className="hover:underline">ログアウト</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
