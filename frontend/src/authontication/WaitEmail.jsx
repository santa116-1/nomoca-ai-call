import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const WaitEmail = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/login")
  };

  return (
    <div className="flex flex-col h-screen">
      <div
        className="flex flex-col flex-grow bg-bottom bg-no-repeat bg-contain"
      >
        <div className="flex flex-col items-center justify-center flex-grow p-10 pb-20">
          <div className="w-full max-w-[500px] bg-white rounded-lg p-10 px-20">
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="mb-10 ">
                <h1 className="text-2xl font-bold text-gray-900 mb-3">
                  パスワード再設定
                </h1>
              </div>
              <div className="flex justify-between items-center mb-6">
                <label
                  htmlFor="remember_me"
                  className="flex items-center text-sm font-medium text-gray-700"
                >
                  <span>
                    ご登録のメールアドレスにパスワード再設定手続きにメールを送信しました。<br />
                    なお、 しばらく経ってもメールが届かない場合は、迷惑フォルダに仕分けされているかメールアドレスの入力間違いの可能性がございます。
                  </span>
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full py-2 bg-blue-800 text-white font-bold rounded-md hover:bg-[#22294e] focus:outline-none focus:bg-[#0e1225]"
              >
                <span className="inline-block mr-2">ログイン画面に戻る</span>
                {/* Replace with actual spinner component */}
                <span className="inline-block spinner-border spinner-border-sm align-middle"></span>
              </button>
            </form>
            {message && (
              <p className="text-green-500 text-center mt-4">{message}</p>
            )}
            {error && (
              <p className="text-red-500 text-center mt-4">{error}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitEmail;
