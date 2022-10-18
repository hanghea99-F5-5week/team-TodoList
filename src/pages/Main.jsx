import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { __getTodoThunk } from "../redux/modules/todoSlice";
import { useEffect } from "react";
import Container from "@mui/material/Container";
import Card from "../components/Card";
import { GrBitcoin } from "react-icons/gr";

const Main = () => {
  const nagivate = useNavigate();
  const dispatch = useDispatch();

  const { todo } = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(__getTodoThunk());
  }, [dispatch]);

  return (
    <div>
      {/* 홈버튼 */}
      <GrBitcoin onClick={() => nagivate("/")} />
      {/* Write페이지로 간다. */}
      <button
        onClick={() => {
          nagivate("/write/add");
        }}
      >
        추가하기
      </button>

      {/* card Field */}
      <Container fixed>
        {todo.todo?.map((todo) => (
          <Card key={todo.id} todo={todo} />
        ))}
      </Container>
    </div>
  );
};

export default Main;
