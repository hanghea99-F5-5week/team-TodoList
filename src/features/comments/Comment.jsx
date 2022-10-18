import React from 'react'
import { useDispatch } from 'react-redux'
import { __deleteComments } from '../../redux/modules/commentListSlice'

const Comment = ({ comment }) => {
    const dispatch = useDispatch()
    const onCommentDelete = () => {
        dispatch(__deleteComments(comment.id))
    }
    return (
        <div>
            <div>{comment.content}</div>
            <button>수정</button>
            <button onClick={onCommentDelete}>삭제</button>
        </div>
    )
}

export default Comment