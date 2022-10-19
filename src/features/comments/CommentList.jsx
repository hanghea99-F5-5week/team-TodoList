import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { __getComments } from '../../redux/modules/commentListSlice'

import Comment from '../comments/Comment'

const CommentList = () => {
    const { id } = useParams
    const dispatch = useDispatch()
    const { comments } = useSelector(state => state.commentList)
    console.log("cm", comments)
    console.log("id", id)


    useEffect(() => {
        dispatch(__getComments())
    }, [dispatch])

    return (
        <div>
            {comments.map((comment) => comment.todoId === Number(id) ? <Comment key={comment.id} comment={comment}>댓글</Comment> : "")}
        </div>
    )
}

export default CommentList