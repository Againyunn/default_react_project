import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// redux connect
import { useSelector } from "react-redux";

// bootstrap
import { Button } from "react-bootstrap";

// component
import LoginedUser from "components/user/login/LoginedUser";
import Likes from "components/likes/Likes";
import Header from "layouts/header";
import Footer from "layouts/footer";

function MainPage() {
  const navigate = useNavigate();

  let thisLoginedUser = useSelector((state) => {
    console.log("state.user", state.user);
    return state.user.thisUser;
  });

  return (
    <>
      <MainWrapper>
        <LoginWrap>
          <LoginedUser />
        </LoginWrap>
        <Likes />
        <br />
        {!thisLoginedUser ? (
          <Button onClick={() => navigate("/login")}>LogIn</Button>
        ) : (
          <></>
        )}
      </MainWrapper>
    </>
  );
}

export default MainPage;

/** styled-component*/
const MainWrapper = styled.div`
  display: flex;
  height: calc(100vh - 400px);
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const LoginWrap = styled.div`
  margin: 20px;
  text-align: center;

  > span {
    font-size: 20px;
    font-weight: bold;
  }
`;
