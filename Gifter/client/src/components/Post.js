import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import Comment from "./Comment.js";


const Post = ({ post }) => {
    return (
        <Card className="m-4">
            <p className="text-left px-2">
                Posted by:
                <Link to={`/users/${post.id}`}>
                    <strong>{post.userProfile.name}</strong>
                </Link>
            </p>
            <CardImg top src={post.imageUrl} alt={post.title} />
            <CardBody>
                <p>
                    <Link to={`/posts/${post.id}`}>
                        <strong>{post.title}</strong>
                    </Link>
                </p>
                <p>{post.caption}</p>

            </CardBody>
        </Card>
    );
};

export default Post;