import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { __deleteComments, __editComments } from '../../redux/modules/commentListSlice'


import styled from 'styled-components'
import Swal from 'sweetalert2'
import { FcCheckmark, FcCancel, FcEditImage, FcFullTrash, FcIphone } from "react-icons/fc";

const Comment = ({ comment }) => {

    const dispatch = useDispatch()




    const [isEdit, setIsEdit] = useState(false)
    const [editComment, setEditComment] = useState({
        content: comment.content
    })




    const onCommentEdit = (e) => {
        e.preventDefault()
        if (editComment.content === "") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '모두 입력해주세요!😥',
            })
        }
        // if (editComment.content.trim() === "") return;
        dispatch(__editComments({ ...comment, ...editComment }))
        setIsEdit(false)

    }


    const onCommentDelete = () => {
        dispatch(__deleteComments(comment.id))
    }
    return (
        <CommentBox>
            <FcIphone className='btnIcon' />
            {!isEdit ? <TextBox>{comment.content}</TextBox> :
                <FormBox>
                    <input type="text" value={editComment.content} onChange={(e) => { setEditComment({ ...editComment, content: e.target.value }) }} />
                    <button onClick={onCommentEdit}><FcCheckmark className='btnIcon' /></button>
                </FormBox>}
            <button onClick={() => setIsEdit(prev => !prev)}>{isEdit ? <FcCancel className='btnIcon' /> : <FcEditImage className='btnIcon' />}</button>
            {!isEdit ? <button onClick={(e) => {
                e.stopPropagation();
                Swal.fire({
                    title: '삭제할까요?',
                    text: '댓글을 삭제 하겠시겠어요?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Delete'
                }).then((result) => {
                    if (result.isConfirmed) {
                        onCommentDelete()
                        Swal.fire(
                            '삭제 완료!',
                            '댓글이 삭제 되었어요!',
                            'success'
                        )
                    }
                })
            }

            }
            ><FcFullTrash className='btnIcon' /></button> : null}
        </CommentBox>
    )
}

export default Comment

const CommentBox = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    margin-bottom: 10px;

    button{
        background-color: #FDC676;
        min-width: 30px;
        min-height:30px;
        width: 13%;
        height: 10%;
        border-radius: 5px;
        border: none;
        margin-left: 10px;
        &:hover{
        background-color: #f7be67;
        
        }
    }
    .btnIcon {
        font-size:20px;
    }
    
`
const TextBox = styled.div`
    /* background-color: orange; */
    margin-right: 20px;
    max-width:200px;
    width:100%;
    height:15px;
    
    font-size: 15px;
    padding-bottom: 23px;
   
    border: none;
    border-bottom: 1px solid #FDC676;

`
const FormBox = styled.form`
    display: flex;
    align-items: center;
    
    input{
        /* background-color: orange; */
        /* margin-right: 40px; */
        max-width:354px;
        width:223px;
        height:23px;
        font-size: 15px;
        padding-bottom: 2px;
        border: none;
        border-bottom: 1px solid #FDC676;
        border-right: 1px solid #FDC676;
    }
`