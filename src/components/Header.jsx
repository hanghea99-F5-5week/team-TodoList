import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { FcHome } from "react-icons/fc";
import { FcAdvertising } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Link to="/">
        HO
        <FcHome className="homeIcon" />
        ME
      </Link>

      <h2>Today's Comment</h2>

      <h2
        className="write"
        onClick={() => {
          navigate("/write/add");
        }}
      >
        <FcAdvertising className="homeIcon" />
      </h2>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-width: 300px;
  width: 50%;
  margin: auto;
  height: 45px;
  box-shadow: 3px 5px 5px 1px gray;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: #fdc676;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  .homeIcon {
    font-size: 20px;
    cursor: pointer;
  }
  h2 {
    text-decoration: underline;
    text-underline-position: under;
  }

  h2.write {
    text-decoration: underline;
    text-underline-position: under;
    cursor: pointer;
  }
`;
