import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "layouts/header";
import Footer from "layouts/footer";

// api
import AuthService from "services/apis/auth-api";

// redux connect
import { useDispatch } from "react-redux";
import { userLogin } from "store/reducers/store";

// login css
import "assets/styles/user/login.css";

// bootstrap
import { Form, Button } from "react-bootstrap";

function Login(props) {
  const [thisUserId, setThisUserId] = useState("");
  const [thisUserPw, setThisUserPw] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogin = () => {
    AuthService.login(thisUserId, thisUserPw)
      .then((response) => {
        dispatch(userLogin(response.data));
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        navigate("*");
      });
  };

  const inputUserId = (e) => {
    const thisId = e.target.value;
    setThisUserId(thisId);
  };

  const inputUserPw = (e) => {
    const thisPw = e.target.value;
    setThisUserPw(thisPw);
  };

  return (
    <div>
      <div className="container">
        <div className="login-el">
          <Form.Label htmlFor="user-id">아이디</Form.Label>
          <Form.Control id="user-id" type="text" onChange={inputUserId} />
        </div>

        <div className="login-el">
          <Form.Label htmlFor="user-pw">비밀번호</Form.Label>
          <Form.Control id="user-pw" type="password" onChange={inputUserPw} />
        </div>
        <div className="login-btn">
          <Button variant="primary" type="button" onClick={handleLogin}>
            로그인
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
