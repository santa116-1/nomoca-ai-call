import React from "react";
import { useNavigate } from "react-router-dom";
import { RiLayoutMasonryFill } from "react-icons/ri";
import { MdBarChart } from "react-icons/md";
import { BsArrowClockwise } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import { googleLogout } from '@react-oauth/google';

const Header = () => {
  const navigate = useNavigate(); 
  const handleLogout =()=>{
      localStorage.removeItem("accessToken");
      googleLogout();
      navigate('/')
  }

  return (
    <header>
      <nav className="flex justify-between items-center bg-[#2978CA] h-20 px-20 text-xl">
        <div className="flex items-center gap-7">
          <h1 className="text-2xl font-semibold  flex-1 text-white">
            NOMOCA - AI CALL
          </h1>
        </div>
        <div className="flex items-center gap-7">
          <div className="navbar flex items-center ml-5">
            <button
              onClick={() => navigate("/dashbord")}
              className=" flex justify-center items-center gap-1 mr-4 p-2 rounded-md text-white "
            >
              <RiLayoutMasonryFill style={{ fontSize: '25px', marginRight: "5px" }} />
              ダッシュボード
            </button>
            <button
              onClick={() => navigate("/dashboard/result")}
              className=" flex justify-center items-center gap-1 mr-4 p-2 rounded-md text-white "
            >
              <MdBarChart style={{ fontSize: '25px', marginRight: "5px" }} />
              通話結果
            </button>
            <button
              onClick={() => navigate("/reset-password")}
              className=" flex justify-center items-center gap-1 mr-4 p-2 rounded-md text-white "
            >
              <BsArrowClockwise style={{ fontSize: '25px', marginRight: "5px" }} />
              パスワード変更
            </button>
            <button
          onClick={() => {
            handleLogout();
          }}
              className=" flex justify-center items-center gap-1 mr-4 p-2 rounded-md text-white "
            >
              <MdLogout style={{ fontSize: '25px', marginRight: "5px" }} />
              ログアウト
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
