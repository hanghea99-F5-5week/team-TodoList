import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useEffect } from "react";
import { __getTodos } from "../redux/modules/todosSlice";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Header from "../components/Header";

const Main = () => {
  const dispatch = useDispatch();

  const { todos } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  console.log(todos);
  return (
    <Layout>
      <Header />
      <Stodos>
        <Stodo>
          {todos?.map((todo) => (
            <Card key={todo.id} todo={todo} />
          ))}
        </Stodo>
      </Stodos>
    </Layout>
  );
};

export default Main;

const Stodo = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-content: center;
  gap: 20px;

  margin: 20px 10px 20px 10px;
`;

const Stodos = styled.div`
  background-color: white;

  min-width: 300px;
  min-height: 50%;
  width: 50%;
  height: 70vh;
  margin: auto;

  box-shadow: 3px 5px 5px 1px gray;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 10px;
    
  }
  &::-webkit-scrollbar-thumb {
    background-color: #FDC676;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: #FFE9AD;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }


`;

// const DetailBox = styled.div`
//     background-color: white;
//     min-width: 300px;
//     min-height: 400px;
//     width: 50%;
//     height: 70vh;
//     margin: auto;
//     padding: 20px 20px 30px 20px;
//     box-shadow: 3px 5px 5px 1px gray;
//     border-bottom-left-radius: 15px;
//     border-bottom-right-radius: 15px;
//

// const TextBox = styled.div`
//     /* background-color: gray; */
//     height: 330px;
//     margin: 20px auto;
//     h1{
//         margin-bottom: 50px;
//     }
