import { useState, useEffect } from "react";
import { fetchAllReviews } from "../utils";
import ReviewCard from "./ReviewCard";
import "../reviewList.css";

function Reviews() {
  const [currentReviews, setCurrentReviews] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    fetchAllReviews().then((reviews) => {
      setCurrentReviews(reviews);
      setIsloading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading....</p>;
  }
  return (
    <div className='reviews-container'>
    
      <h1 className='reviews-header'>Review All Our Reviews</h1>
      <p className='reviews-description'>Considering buying a game but want to know if it's any good before you do? Want to know what other people think about that game you just can't stop playing? Check out our list below to find the answers to all of your questions!</p>
      <ul className='review-list'>
        {currentReviews.map((review) => {
          return (
           
            <ReviewCard
              key={review.review_id}
              title={review.title}
              image={review.review_img_url}
              owner={review.owner}
              votes={review.votes}
              review_id={review.review_id}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Reviews
