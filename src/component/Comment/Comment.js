import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Commentdetail from '../Commentdetail/Commentdetail';

const Comment = () => {

    const {commentId} = useParams();
    const [comment, setComment] = useState([]);
    useEffect(() => {
        const url =`https://jsonplaceholder.typicode.com/comments?postId=${commentId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComment(data))
    })
    return (
        <div>
            <h1 style={{textAlign:"center"}}>comment here {comment.name}</h1>
            {
                comment.map(comment => <Commentdetail comment={comment}></Commentdetail>)
            }    
        </div>
    );
};

export default Comment;