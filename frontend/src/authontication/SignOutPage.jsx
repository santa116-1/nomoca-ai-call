import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { googleLogout } from '@react-oauth/google';

function SignOutPage() {
  const navigate =  useNavigate();
  useEffect(() => {
    setTimeout(() => {
      localStorage.removeItem("accessToken");
      googleLogout();
      navigate('/')
    }, 2000);
  }, []);

  return (

      <div className="flex flex-col flex-auto min-h-screen items-center sm:justify-center min-w-0">
        <div className="flex items-center w-full sm:w-auto min-h-full sm:min-h-auto py-16 px-8 sm:p-24 ">
          <div className="w-full max-w-320 sm:w-320 mx-auto sm:mx-0">
            <h1 className="mt-8 text-2xl font-bold tracking-tight leading-tight text-center">
              サインアウトしました!
            </h1>

            <Typography className="mt-32 text-md font-medium text-center" color="text.secondary">
              <span>Go to</span>
              <Link className="ml-4" to="/sign-in">
              ログインする
              </Link>
            </Typography>
          </div>
        </div>
      </div>

  );
}

export default SignOutPage;
