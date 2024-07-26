import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { InputAdornment, IconButton, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Error from "../component/common/error";
// import Notification from "../component/notification";

const handleLogin = () => {

  // Handle login with Google
  const auth2 = window.gapi.auth2.getAuthInstance();
  auth2.signIn().then((googleUser) => {
    const id_token = googleUser.getAuthResponse().id_token;
    // Send the token to your backend for verification
    // (using fetch or Axios)
  });
};

const SignUp = (props) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [validPassword, setValidPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  // const [notification, setNotification] = useState("");
  const SetNotification = props.SetNotification;
  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setValidPassword(validatePassword(newPassword));
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const validatePassword = (password) => {
    // Define a regular expression pattern for password validation
    const pattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    return pattern.test(password);
  };
  const validateForm = () => {
    // Reset error state
    setError("");

    // Email validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError("有効なメールアドレスを入力してください。");
      return false;
    }
    if (!validPassword) {
      setError("パスワードは8文字以上で、少なくとも小文字1文字、大文字1文字、数字1文字、記号1文字を含む必要があります。");
      return false;
    }

    return true;
  };
  const handleSubmit = (e) => {
    setError('');
    const apiUrl = process.env.REACT_APP_API_URL;
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted with", email, password);
      const signup_data = {
        email: email,
        password: password,
      };
      axios
        .post(`${apiUrl}/api/authentication/register/`, signup_data)
        .then((response) => {
          console.log("Server response:", response.data["success"]);
          navigate("/login");
          SetNotification(response.data["success"]);
        })
        .catch((error) => {
          setError(error.response.data.error);
        });
    } else {
      setError("フォームが無効です。エラーが表示されています...");
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div
        className="flex flex-col flex-grow bg-bottom bg-no-repeat bg-contain"
      >
        <div className="flex flex-col items-center justify-center flex-grow p-10 pb-20">
          <div className="w-full max-w-[650px] bg-white p-10 px-20">
            <div className="w-full" noValidate id="sign_in_form">
              <input
                type="hidden"
                name="_token"
                value="yor8hTMkxkJkfuqJpfYHYokR9mM7qIbwmb5WXzE8"
              />
              <div className="mb-10 text-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-3">
                  アカウントの作成
                </h1>
              </div>
              <div className="mb-6">
                <label htmlFor="" className="text-blue-700 text-lg font-bold">Email</label>

                <input
                  id="email"
                  name="email"
                  type="text"
                  className="w-full px-4 py-3  border-b-2 border-gray-200 focus:outline-none focus:border-gray-500"
                  autoComplete="off"
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
                    placeholder="パスワード"
                    value={password}
                    onChange={handlePasswordChange}
                    error={!validPassword && password.length > 0}
                    helperText={
                      !validPassword && password.length > 0
                        ? "パスワードは8文字以上で、少なくとも小文字1文字、大文字1文字、数字1文字、記号1文字を含む必要があります。"
                        : ""
                    }
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
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </button>
                </div>
                
                {
                    !validPassword && password.length > 0
                      ? <div className="text-sm text-red-600 font-semibold">パスワードは8文字以上で、少なくとも小文字1文字、大文字1文字、数字1文字、記号1文字を含む必要があります。</div>
                      : ""
                  }


              </div>
              <div className="flex justify-between items-center mb-6">
                <label
                  htmlFor="remember_me"
                  className="flex items-center text-sm font-semibold text-gray-700"
                >
                  <span>半角英数字に記号を組み合わせた8文字以上</span>
                </label>
              </div>
              {/* <Button variant="contained" color="primary">
                Click Me
              </Button> */}
              <button
                type="submit"
                className="w-full justify-center py-2 bg-blue-800 text-white font-bold rounded-lg hover:bg-[#22294e] focus:outline-none focus:bg-[#0e1225]"
                onClick={handleSubmit}
              >
                <span className="inline-block mr-2">アカウントを作成する</span>
                <span className="inline-block spinner-border spinner-border-sm align-middle"></span>
              </button>
              <div className="text-center mt-6 text-sm text-gray-600 uppercase font-semibold">
                または
              </div>
              <div
                className="w-full py-3 flex items-center justify-center bg-white border border-gray-300 rounded-[3rem] mt-3 hover:bg-gray-100 focus:outline-none"
                onClick={handleLogin}
              >
                <img
                  alt="Google Icon"
                  src="images/google-icon.svg"
                  className="h-6 mr-3"
                />
                <span className="text-gray-700 font-bold">
                  Google アカウントで作成
                </span>
              </div>
              <div className="flex justify-center mt-6 space-x-4 text-sm font-semibold text-gray-700">
                <div
                  onClick={() => navigate("/login")}
                  className="hover:text-blue-500 m-auto"
                >
                  ログインはこちら
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Error content={error} />
    </div>
  );
};

export default SignUp;
