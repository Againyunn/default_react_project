import React, { useState, useEffect } from "react";

// redux connect
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "store/reducers/store";

// bootstrap css
import { Button } from "react-bootstrap";

// login css
import "assets/styles/user/login.css";

function LoginedUser() {
  const [loginedUser, setLoginedUser] = useState(false);

  const dispatch = useDispatch();

  let thisLoginedUser = useSelector((state) => {
    return state.user.thisUser;
  });

  useEffect(() => {
    console.log("thisLoginedUser", thisLoginedUser);
    //사용자 검색 시
    if (thisLoginedUser === false) {
      setLoginedUser(false);
      return;
    } else {
      setLoginedUser(thisLoginedUser);
    }
  }, [thisLoginedUser]);

  const AllUserData = () => {
    if (loginedUser === false) {
      return;
    }

    return (
      <div>
        <hr />
        <div className="user-data-block">
          <span className="user-data-label">아이디</span>
          <span>{loginedUser.userId}</span>
        </div>
        <div className="user-data-block">
          <span className="user-data-label">성별</span>
          <span>{loginedUser.gender}</span>
        </div>
        <div className="user-data-block">
          <span className="user-data-label">나이</span>
          <span>{loginedUser.age}</span>
        </div>
        <Button onClick={() => dispatch(userLogout())}>LogOut</Button>
      </div>
    );
  };

  return (
    <div className="is-logined-wrap">
      {!loginedUser ? (
        <span className="no-users">아직 접속한 유저가 없습니다.</span>
      ) : (
        <AllUserData />
      )}
    </div>
  );
}

export default LoginedUser;
