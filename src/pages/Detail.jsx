import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'


import styled from 'styled-components'
import { FcFullTrash, FcSupport } from "react-icons/fc";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { __getTodos } from '../redux/modules/todosSlice';

const Detail = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const { id } = useParams()
    const todos = useSelector((state) => state.todos)

    console.log("todos", todos)

    useEffect(() => {
        dispatch(__getTodos())
    }, [dispatch])




    return (
        <>
            <Layout>
                <Header />
                <DetailBox>
                    <BtnBox>
                        <button><FcSupport /></button>
                        <button><FcFullTrash /></button>
                    </BtnBox>
                    <div>User Name: 김혁진</div>
                    <TextBox>
                        <h1>제목</h1>
                        <p>내용</p>
                    </TextBox>

                    <div>
                        댓글
                        <form>
                            <input type="text"></input>
                            <button>추가하기</button>
                        </form>
                        <div>댓글리스트</div>
                    </div>
                </DetailBox>

            </Layout>
        </>
    )
}

export default Detail

const DetailBox = styled.div`
    background-color: white;
    min-width: 300px;
    min-height: 400px;
    width: 50%;
    height: 70vh;
    margin: auto;
    padding: 20px 20px 30px 20px;
    box-shadow: 3px 5px 5px 1px gray;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
`

const BtnBox = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    gap: 10px;
    button{
        background-color: #FDC676;
        min-width: 30px;
        min-height:30px;
        width: 13%;
        height: 10%;
        border-radius: 5px;
        border: none;
        &:hover{
        background-color: #f7be67;
    }
    }
`

const TextBox = styled.div`
    /* background-color: gray; */
    height: 330px;
    margin: 20px auto;
    h1{
        margin-bottom: 50px;
    }
`