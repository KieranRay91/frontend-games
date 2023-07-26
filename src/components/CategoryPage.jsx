import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchAllReviews } from "../utils";
import ReviewCard from "./ReviewCard";

function CategoryPage() {
    const [isLoading, setIsLoading] = useState(true)
    const [currentCategory, setCurrentCategory] = useState([])
    const { category } = useParams();

    useEffect(() => {
        fetchAllReviews(category).then((reviews) => {
            setCurrentCategory(reviews)
            setIsLoading(false)
        })
    }, [currentCategory]);

    if (isLoading) {
        return <p>Loading....</p>
    }

return(
    <div>
        <h2>{category}</h2>
          <ul className='review-list'>
        {currentCategory.map((review) => {
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
)
}

export default CategoryPage;