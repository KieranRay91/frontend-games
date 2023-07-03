import React, { useState } from "react";
import { postComment } from "../utils";

function CommentForm({review_id, setComments}) {
  const [userComment, setUserComment] = useState("");
  const [name, setName] = useState("");
  const [addingComment, setAddingComment] = useState(false)
  const [commentAddedSuccessfully, setCommentAddedSuccessfully] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userComment && name) {
      setAddingComment(true)
      postComment(name, userComment, review_id).then((response) => {
        setCommentAddedSuccessfully("Your comment has been added!")
        const addedComment = response;
        setComments((prevComments) => [...prevComments, addedComment]);
        setUserComment("");
        setName("");
        setAddingComment(false)
      })
    }
  };

  return (

    <form className="comment-form" onSubmit={handleSubmit}>
      <h3>Add a Comment</h3>
      <div>
        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          value={userComment}
          onChange={(e) => setUserComment(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <button type="submit" disabled={addingComment}>Submit</button>
      {commentAddedSuccessfully && <p>{commentAddedSuccessfully}</p>}
    </form>
  );
}

export default CommentForm;
