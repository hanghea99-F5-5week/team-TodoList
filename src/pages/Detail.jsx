import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import AddCommentForm from '../features/comments/AddCommentForm'
import CommentList from '../features/comments/CommentList'

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { __editTodos, __getTodos } from '../redux/modules/todosSlice';

/** CSS */
import styled from 'styled-components'
import { FcFullTrash, FcSupport } from "react-icons/fc";
import Swal from 'sweetalert2'


const Detail = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()



    const { id } = useParams()
    const { todos } = useSelector((state) => state.todos)
    const todo = todos.find((todo) => todo.id === +id)

    const [isEdit, setIsEdit] = useState(false)

    const [editTodo, setEditTodo] = useState({
        title: todo?.title,
        body: todo?.body
    })


    useEffect(() => {
        dispatch(__getTodos())
    }, [dispatch])

    const onEditHandler = (e) => {
        e.preventDefault()
        if (editTodo.title === "" || editTodo.body === "") { //바디나 타이틀에 빈칸이 있을때
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '모두 입력해주세요!😥',
            })
        }
        if (editTodo.title.trim() === "" || editTodo.body.trim() === "") return;
        dispatch(__editTodos({ ...todo, ...editTodo }))
        setIsEdit(false)
    }



    return (
        <>
            <Layout>
                <Header />
                <DetailBox>
                    <BtnBox>

                        <button onClick={() => setIsEdit(prev => !prev)}>{isEdit ? "취소" : <FcSupport />}</button>
                        <button><FcFullTrash /></button>
                    </BtnBox>
                    <div>User Name: {todo?.username} </div>
                    {!isEdit ?
                        <TextBox>
                            <h1>{todo?.title}</h1>
                            <p>{todo?.body}</p>
                        </TextBox> : null}

                    {isEdit ?
                        <form>
                            <input type="text" value={editTodo.title} onChange={(e) => { setEditTodo({ ...editTodo, title: e.target.value }) }} />
                            <textarea type="text" value={editTodo.body} onChange={(e) => { setEditTodo({ ...editTodo, body: e.target.value }) }} />
                            <button onClick={onEditHandler}>저장</button>
                        </form> : null}

                    <div>
                        댓글
                        <AddCommentForm />
                        댓글리스트
                        <CommentList />
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