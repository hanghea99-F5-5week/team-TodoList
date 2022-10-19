import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { __getComments } from '../../redux/modules/commentListSlice'

import Comment from '../comments/Comment'

const CommentList = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { comments } = useSelector(state => state.commentList)
    console.log("cm", comments)
    console.log("id", id)


    useEffect(() => {
        dispatch(__getComments())
    }, [dispatch])



    function timeCheck(prevTime = 1665846659220) {
        const currentTime = Date.now();
        const gap = (currentTime - prevTime) / 1000 / 60;
        if (gap <= 1) return "1분 전";
        else if (1 < gap && gap < 60) return `${gap | 0}분 전`;
        else if (60 <= gap && gap < 1440) return `${parseInt(gap / 60)}시간 전`;
        else if (1440 <= gap && gap < 2880) return "하루 전";
        else if (2880 < gap && gap < 43200) return `${parseInt(gap / 60 / 30)}일 전`;
        return gap;
    }


    return (
        <div>
            {comments.map((comment) => comment.todoId === Number(id) ? <Comment key={comment.id} comment={comment}>댓글</Comment> : "")}
        </div>
    )
}

export default CommentList