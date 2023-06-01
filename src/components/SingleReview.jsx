import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchSingleReview, fetchCommentsByReviewId } from "../utils";
import "../singleReview.css";
import CommentsList from "./CommentsList";
import { formatDate } from "../utils";

function SingleReview() {
  const { review_id } = useParams();
  const [singleReview, setSingleReview] = useState({});
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    fetchSingleReview(review_id).then((review) => {
      setSingleReview(review);
      setIsLoading(false);
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
      <p>{singleReview.review_body}</p>
      <p>Category: {singleReview.category}</p>
      <p>Created On: {formatDate(singleReview.created_at)}</p>
      <p>UpVotes: {singleReview.votes}</p>

      <button onClick={toggleComments}>
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>

      {showComments && <CommentsList comments={comments} />}
    </div>
  );
}


export default SingleReview
