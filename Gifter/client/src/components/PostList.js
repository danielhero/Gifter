import React, { useContext, useEffect, useRef } from "react";
import { PostContext } from "../providers/PostProvider";
import Post from "./Post";

const PostList = () => {
    const { posts, getAllPosts, setSearchTerm, searchTerm, searchPosts } = useContext(PostContext);
    const search = useRef("")

    useEffect(() => {
        getAllPosts();
    }, []);

    useEffect(() => {
        if (search.current.value !== "") {
            searchPosts(search.current.value)
        }
        else if (search.current.value !== []) {
            getAllPosts()
        }
    }, [searchTerm])

    return (
        <>
            <div className="searchBar">
                <input
                    type="text"
                    ref={search}
                    className="inputSearch"
                    onKeyUp={e => setSearchTerm(search.current.value)}
                    name="userSearch"
                    placeholder="Search Posts"
                />
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="cards-column">
                        {
                            posts.map((post) => (
                                <Post key={post.id} post={post} />
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PostList;