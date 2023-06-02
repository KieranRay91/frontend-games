import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchSingleReview, fetchCommentsByReviewId, formatDate, updateVotesByReviewId } from "../utils";
import "../singleReview.css";
import CommentsList from "./CommentsList";
import VoteButton from "./VoteButton";

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
      const currentVotes = review.votes;
      setSingleReview(review);
      setIsLoading(false);
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

  const handleVote = (value) => {
    updateVotesByReviewId(review_id, value)
      .then((updatedReview) => {
        setError("");
      })
      .catch((error) => {
        console.error("Failed to update votes:", error);
        setError("Failed to update votes. Please try again.");
      });
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
      <p>{singleReview.review_body}</p>
      <p>Category: {singleReview.category}</p>
      <p>Created On: {formatDate(singleReview.created_at)}</p>

      <div className="votes-container">
        <VoteButton votes={votes} setVotes={setVotes} onClick={handleVote} />
        <p>UpVotes: {votes}</p>
      </div>

      <button className="comments-button" onClick={toggleComments}>
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>

      {error && <p>{error}</p>}
      {showComments && <CommentsList comments={comments} />}
    </div>
  );
}

export default SingleReview;
