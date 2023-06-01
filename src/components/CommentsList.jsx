import { formatDate } from "../utils";

function CommentsList({ comments }) {
  if (comments.length === 0) {
    return (
      <div className="comment-list">
        <h2>Comments</h2>
        <p>There are currently no comments for this review!</p>
      </div>
    );
  }
    
  return (
    <div>
      <h3>Comments:</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.comment_id}>
            <p>{comment.author}: "{comment.body}"</p>
            <p>Posted on: {formatDate(comment.created_at)}</p>
            <p>Upvotes: {comment.votes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentsList;