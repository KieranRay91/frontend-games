import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  fetchSingleReview,
  fetchCommentsByReviewId,
  formatDate
} from "../utils";
import "../singleReview.css";
import CommentsList from "./CommentsList";
import VoteButton from "./VoteButton";
import CommentForm from "./AddComment.";

function SingleReview() {
  const { review_id } = useParams();
  const [singleReview, setSingleReview] = useState({});
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showComments, setShowComments] = useState(false);
  const [votes, setVotes] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchSingleReview(review_id).then((review) => {
      setIsLoading(false)
      const currentVotes = review.votes;
      setSingleReview(review);
      setVotes(currentVotes);
    });
  }, [review_id]);

  useEffect(() => {
    fetchCommentsByReviewId(review_id).then((comments) => {
      setComments(comments);
    });
  }, [review_id]);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  if (isLoading) {
    return <p>Loading....</p>;
  }

  return (
    <div className="single-review-content">
      <h1>{singleReview.title}</h1>
      <h2>Review Provided by: {singleReview.owner}</h2>
      <h3>Game Designer: {singleReview.designer}</h3>
      <img
        src={singleReview.review_img_url}
        alt={`Image for the review titled ${singleReview.title}`}
      />

      <div className="votes-container">
        <VoteButton votes={votes} setVotes={setVotes} review_id={review_id}/>
        <p>UpVotes: {votes}</p>
      </div>
      <p>{singleReview.review_body}</p>
      <p>Category: {singleReview.category}</p>
      <p>Created On: {formatDate(singleReview.created_at)}</p>
      <CommentForm review_id={review_id} setComments={setComments} />
      <button className="comments-button" onClick={toggleComments}>
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>

      {error && <p>{error}</p>}
      {showComments && <CommentsList comments={comments} />}
    </div>
  );
}

export default SingleReview;
