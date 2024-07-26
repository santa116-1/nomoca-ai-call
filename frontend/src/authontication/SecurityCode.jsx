import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SecurityCode = ({email}) => {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await axios.post(`${apiUrl}/api/authentication/verify-code/`, {email , code });
      setMessage('ログイン成功しました！');
      const data = response.data;
      const accessToken = data.result.token;
      setToken(accessToken);
      localStorage.setItem("accessToken", accessToken);
      console.log(response.data);
      navigate("/dashboard")

    } catch (error) {

      console.log(error)
      setError(error.response?.data?.error || "An error occurred");
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div
        className="flex flex-col flex-grow bg-bottom bg-no-repeat bg-contain"
      >
        <div className="flex flex-col items-center justify-center flex-grow p-10 pb-20">
          <div className="w-full max-w-[650px] bg-white rounded-lg p-10 px-20">
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="mb-10 ">
                <h1 className="text-2xl font-bold text-gray-900 mb-3">
                  パスワード再設定
                </h1>
              </div>
              <div className="mb-6">
                <label htmlFor="" className="text-blue-700 text-lg font-bold">6桁のコードを入力してください</label>
                <input
                  id="security_code"
                  name="security_code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full px-4 py-3 border-b-2 border-gray-200 focus:outline-none focus:border-gray-500"
                  autoComplete="off"
                  required
                  style={{
                    width: '100%',
                    padding: '10px 16px',
                    boxSizing: 'border-box',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    marginTop:"3px",
                    marginBottom: "10px"
                  }}
                />
              </div>
              <button
                type="submit"
                className="w-full justify-center py-2 bg-blue-800 text-white font-bold rounded-md hover:bg-[#22294e] focus:outline-none focus:bg-[#0e1225]"
              >
                <span className="inline-block mr-2">認証</span>
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

export default SecurityCode;
