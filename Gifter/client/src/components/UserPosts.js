import React, { useEffect, useContext } from "react";
import { PostContext } from "../providers/PostProvider";
import { useParams } from "react-router-dom";
import Post from "./Post";

const UserPosts = () => {
    const { posts, getUserPosts } = useContext(PostContext);
    const { id } = useParams();

    useEffect(() => {
        getUserPosts(id);
    }, []);

    if (!posts) {
        return null;
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-12 col-lg-6">
                    {posts.map((post) => (
                        <Post key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserPosts;