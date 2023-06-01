import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchSingleReview } from "../utils";
import "../singleReview.css"

function SingleReview() {
  const { review_id } = useParams();
  const [singleReview, setSingleReview] = useState({});
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    fetchSingleReview(review_id).then((review) => {
      setSingleReview(review)
      setIsloading(false);
    });
  }, [review_id]);


  if (isLoading) {
    return <p>Loading....</p>;
  }

  return (
    <div className ='single-review-content'>
      <h1>{singleReview.title}</h1> 
      <h4>Review Author: {singleReview.owner}</h4>
      <h3>Game Designer: {singleReview.designer}</h3> 
      <img src={singleReview.review_img_url} alt={`Image for the review titled ${singleReview.title}`}/>
      <p>{singleReview.review_body}</p>
      <p>Category: {singleReview.category}</p>
      <p>Created At: {singleReview.created_at}</p>
      <p>Votes: {singleReview.votes}</p>
    </div>
  );
}

export default SingleReview
