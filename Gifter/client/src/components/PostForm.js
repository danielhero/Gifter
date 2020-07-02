import { PostContext } from "../providers/PostProvider";
import React, { useContext, useRef } from "react";

export default (props) => {
    const { addPost } = useContext(PostContext)

    const title = useRef();
    const imageUrl = useRef();
    const caption = useRef();
    const userProfileId = useRef();

    const constructNewPost = () => {

        const newPostObject = {
            title: title.current.value,
            imageUrl: imageUrl.current.value,
            caption: caption.current.value,
            userProfileId: userProfileId.current.value,
            dateCreated: new Date(),
        }
        addPost(newPostObject)
    };

    return (
        <form className="postForm">
            <h3 className="postForm__title">New Post</h3>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="postTitle">Title: </label>
                    <input
                        type="text"
                        id="postTitle"
                        ref={title}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Post Title"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="postImage">ImageURL: </label>
                    <input
                        type="url"
                        id="postImage"
                        ref={imageUrl}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Post GIF"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="postCaption">Caption </label>
                    <input
                        type="text"
                        id="postCaption"
                        ref={caption}
                        autoFocus
                        className="form-control"
                        placeholder="Post Caption"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="postUserId">UserId </label>
                    <input
                        type="number"
                        id="postuserId"
                        ref={userProfileId}
                        autoFocus
                        className="form-control"
                        placeholder="Post UserId"
                    />
                </div>
            </fieldset>
            <button
                type="submit"
                onClick={(evt) => {
                    evt.preventDefault(); // Prevent browser from submitting the form
                    constructNewPost();
                }}
                className="btn btn-primary"
            >
                Save Post
          </button>
        </form>
    );
}