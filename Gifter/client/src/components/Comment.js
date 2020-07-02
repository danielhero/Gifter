import React from "react";

const Comment = ({ comment }) => {
    return (
        <div>{comment.message}</div>
    );
};

export default Comment;