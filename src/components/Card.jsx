import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { VscTrash } from "react-icons/vsc";

import { __deleteTodoThunk } from "../redux/modules/todoSlice";

const Card = ({ todo }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onDeleteHandler = () => {
    dispatch(__deleteTodoThunk(todo.id));
  };

  return (
    <StCard
      onClick={() => {
        navigate(`/Detail/${todo.id}`);
      }}
    >
      <div justify="space-between">
        <StText>{todo.title}</StText>
        <STButton
          onClick={(e) => {
            e.stopPropagation();
            const result = window.confirm("삭제 하쉴?");
            if (result) {
              return onDeleteHandler();
            } else {
              return;
            }
          }}
        >
          <VscTrash color="#FE531F"></VscTrash>
        </STButton>
      </div>
    </StCard>
  );
};

export default Card;

const StCard = styled.div`
  padding: 12px;
  height: 90px;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 12px;
  width: 100%;
  margin-bottom: 12px;
`;

const StText = styled.div`
  font-size: 20px;
`;

const STButton = styled.div`
  border: 1px solid #eee;
  background-color: #fff;
  height: 46px;
  border-radius: 8px;
  background-color: aquamarine;
  cursor: pointer;
`;
