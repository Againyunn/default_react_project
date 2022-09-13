import React, { useEffect, useState } from "react";
import styled from "styled-components";

// redux connect
import { useSelector, useDispatch } from "react-redux";
import { plusFuntion } from "store/reducers/store";

// bootstrap
import { Button } from "react-bootstrap";

function Likes(props) {
  const [thisNumber, setThisNumber] = useState(0);

  let likeNumberData = useSelector((state) => {
    return state.likes.likeNumber;
  });

  let dispatch = useDispatch();

  useEffect(() => {
    setThisNumber(likeNumberData);
  }, [likeNumberData]);

  const addNumber = () => {
    dispatch(plusFuntion());
  };

  return (
    <Likeswrap>
      <span>{thisNumber}</span>
      <div>
        <img
          src={require("../../assets/images/icon/like.png")}
          alt="like"
          onClick={addNumber}
        />
      </div>
    </Likeswrap>
  );
}
export default Likes;

/** styled-component*/
const Likeswrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: center;
  text-align: center;

  span {
    font-size: 20px;
    font-weight: bold;
    color: #0078ff;
  }

  img {
    &:hover {
      filter: brightness(80%);
    }
  }
`;

const LoginButton = styled(Button)`
  background-color: blue;
`;
