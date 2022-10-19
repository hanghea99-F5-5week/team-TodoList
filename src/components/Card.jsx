import React from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { VscTrash } from "react-icons/vsc";
import { __deleteTodos } from "../redux/modules/todosSlice";

import styled from "styled-components";
import Swal from "sweetalert2";

const Card = ({ todo }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onDeleteHandler = () => {
    dispatch(__deleteTodos(todo.id));
  };

  return (
    <StCard
      onClick={() => {
        navigate(`/Detail/${todo.id}`);
      }}
    >
      <div style={{ width: "100%" }}>
        <Stdiv>
          <StText>{todo.title}</StText>
          <STButton
            onClick={(e) => {
              e.stopPropagation();
              Swal.fire({
                title: '삭제할까요?',
                text: '게시글을 삭제 하겠시겠어요?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Delete'
              }).then((result) => {
                if (result.isConfirmed) {
                  onDeleteHandler()
                  Swal.fire(
                    '삭제 완료!',
                    '게시글이 삭제 되었어요!',
                    'success'
                  )
                }
              })
            }}
          >
            <VscTrash color="#FE531F"></VscTrash>
          </STButton>
        </Stdiv>

        <div>작성자 : {todo.username}</div>
      </div>
    </StCard>
  );
};

export default Card;

const Stdiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: auto;
`;

const StCard = styled.div`
  min-width: 250px;
  width: 50%;
  margin: 5px 15px 5px 15px;
  padding: 12px;
  height: 90px;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 12px;
  overflow: auto;

  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
`;

const StText = styled.div`
  font-size: 25px;
  margin-bottom: 10px;
  
`;

const STButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  border: 1px solid #eee;
  background-color: #fff;
  height: 30px;
  border-radius: 8px;
  background-color: white;
  cursor: pointer;
`;
