import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Error from "../component/common/error";
import Notification from "../component/common/notification";
import { useGoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";

const Login = (props) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const [notification, setNotification] = useState("");
  const [saveLoginStatus, setSaveLoginStatus] = useState(false);

  const content = props.content ? props.content : "";
  const apiUrl = process.env.REACT_APP_API_URL;
  const [credentialResponse, setCredentialResponse] = useState(null);

  const user = useMemo(() => {
    if (!credentialResponse?.credential) return null;
    const user_info = jwtDecode(credentialResponse.credential);
    return user_info;
  }, [credentialResponse]);


  const googlelogin = useGoogleLogin({

    onSuccess: (credentialResponse) => {
      const { access_token } = credentialResponse;
      if (access_token) {
        axios
          .post(`${apiUrl}/api/authentication/check-google-registration/`, { access_token })
          .then((response) => {
            const data = response.data;
            const accessToken = data.accessToken;
            setToken(accessToken);
            localStorage.setItem("accessToken", accessToken);
            setNotification(data.message);
            navigate("/dashboard");
          })
          .catch((error) => {
            console.error("Backend Error:", error);
            setError(error.response.data.error);
          });
      } else {
        setError("Failed to get Google credentials");
      }
      console.log(credentialResponse);
    },
    onError: () => {
      setError("Login Failed");
      navigate("/login");
    },
  });

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    props.setEmail(event.target.value)
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleCheckboxChange = (e) => setSaveLoginStatus(e.target.checked);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const apiUrl = process.env.REACT_APP_API_URL;
    console.log("Form submitted with", email, password);
    const signin_data = {
      email: email,
      password: password,
    };
    axios
      .post(`${apiUrl}/api/authentication/login/`, signin_data, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        navigate("/verify-code");
      })
      .catch((error) => {
        setError(error.response?.data?.error || "An error occurred");
      });
  };
  const isAuthenticated = () => {
    return localStorage.getItem("accessToken") !== null && undefined;
  };
  useEffect(() => {
    isAuthenticated() && navigate("/dashboard");
  }, [navigate, token]);
  return (
    <div className="flex flex-col h-screen">
      <div
        className="flex flex-col flex-grow bg-bottom bg-no-repeat bg-contain"
      >
        <div className="flex flex-col items-center justify-center flex-grow p-10 pb-20">
          <div className="w-full max-w-[650px] bg-white  p-10 px-20">
            <div className="w-full" noValidate id="sign_in_form">
              <input
                type="hidden"
                name="_token"
                value="yor8hTMkxkJkfuqJpfYHYokR9mM7qIbwmb5WXzE8"
              />
              <div className="mb-10">
                <h1 className="text-4xl font-bold text-gray-800 mb-3">
                  nomoca-ai-call
                </h1>
              </div>
              <div className="mb-6">
                <label htmlFor="" className="text-blue-700 text-lg font-bold">Email</label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  value={email}
                  onChange={handleEmailChange}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    boxSizing: 'border-box',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                  }}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="" className="text-blue-700 text-lg font-bold">Password</label>
                <div style={{ width: '100%', position: 'relative' }}>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={handlePasswordChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      boxSizing: 'border-box',
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                    }}
                  />
                  <button
                    type="button"
                    onClick={handleTogglePassword}
                    style={{
                      position: 'absolute',
                      right: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    {showPassword ? <LuEyeOff /> : <LuEye />}
                  </button>
                </div>
              </div>
              <div className="flex justify-between mt-4 mb-6 text-gray-700 font-semibold text-sm">
                <div
                  className="font-semibold cursor-pointer"
                >
                  <label>
                    <input type="checkbox" checked={saveLoginStatus} onChange={handleCheckboxChange} className=" mr-3" />
                    ログイン状態を保存する
                  </label>

                </div>
                <div
                  onClick={() => navigate("/forgot_password")}
                  className="text-blue-500 font-semibold cursor-pointer"
                >
                  パスワードをお忘れですか？
                </div>

              </div>
              <button
                type="submit"
                className="w-full justify-center py-2 bg-blue-800 text-white font-bold rounded-md hover:bg-[#22294e] focus:outline-none focus:bg-[#0e1225]"
                onClick={handleSubmit}
              >
                <span className="inline-block mr-2">ログイン</span>
                <span className="inline-block spinner-border spinner-border-sm align-middle"></span>
              </button>
              <div className="text-center mt-6 text-sm text-gray-600 uppercase font-semibold">
                または
              </div>
              <div
                className=" relative w-full py-2 flex items-center justify-center gap-5 cursor-pointer bg-white border border-gray-300 rounded-[3rem] mt-3 hover:bg-gray-100 focus:outline-none"
                onClick={() => googlelogin()}
              >
                <img
                  alt="Google Icon"
                  src="images/google-icon.svg"
                  className="h-6 mr-3"
                />
                <span className="text-gray-700 font-bold">
                  Googleでログイン
                </span>
              </div>
              <div className="flex justify-center mt-4 text-gray-700 font-semibold text-sm">
                <a href="/register" className="text-blue-500 font-semibold ">
                  アカウントの作成はこちら
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Error content={error} />
      <Notification content={content} />
    </div>
  );
};

export default Login;
