import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const token = new URLSearchParams(location.search).get("token");
    console.log(token);
    e.preventDefault();
    setMessage("");
    setError("");

    if (password !== confirmPassword) {
      setError("パスワードが一致しない");
      return;
    }

    try {
      const response = await axios.post(
        `${apiUrl}/api/authentication/reset-password/`,
        {
          password: password,
          confirmPassword: confirmPassword,
        },
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          }
        }
      );

      if (response.status === 200) {
        setMessage("パスワードリセットは成功しました。");
        // navigate("/login");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.error || "An unexpected error occurred.");
      } else {
        setError("An error occurred while making the request.");
      }
    }
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  return (
    <div className="flex flex-col h-screen">
      <div
        className="flex flex-col flex-grow bg-bottom bg-no-repeat bg-contain"
      >
        <div className="flex flex-col items-center justify-center flex-grow p-10 pb-20">
          <div className="w-full max-w-[650px] bg-white p-10 px-20">
            <form
              className="w-full"
              onSubmit={handleSubmit}
              noValidate
              id="reset_password_form"
            >
              <div className="mb-10">
                <h1 className="text-2xl font-bold text-gray-900 mb-3">
                  パスワード変更
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
                <label htmlFor="" className="text-blue-700 text-lg font-bold">新しいパスワード</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border-b-2 border-gray-200 focus:outline-none focus:border-gray-500"
                  autoComplete="off"
                  required
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
                <label htmlFor="" className="text-blue-700 text-lg font-bold">新しいパスワード（確認）</label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 border-b-2 border-gray-200 focus:outline-none focus:border-gray-500"
                  autoComplete="off"
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    boxSizing: 'border-box',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                  }}
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-blue-800 text-white font-bold rounded-md hover:bg-[#22294e] focus:outline-none focus:bg-[#0e1225]"
              >
                <span className="inline-block mr-2">変更</span>
              </button>
              <div className="flex justify-center mt-4 text-gray-700 font-semibold text-sm">
                <a href="/login" className="text-blue-500 font-semibold">
                  戻る
                </a>
              </div>
            </form>
            {message && <p style={{ color: "green", textAlign: "center" }}>{message}</p>}
            {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
