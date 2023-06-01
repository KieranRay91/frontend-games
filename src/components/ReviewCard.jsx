import { Link } from "react-router-dom";

function ReviewCard({ review_id, title, image, owner, votes }) {
  return (
    <li className="review-card" role="article">
      <article>
        <h2>{title}</h2>
        <img
          className="image"
          src={image}
          alt={`Image of the game for the review titled ${title}`}
        />
        <h3>Written by: {owner}</h3>
        <h4>UpVotes: {votes}</h4>
        <Link to={`/reviews/${review_id}`}>
          <button className="read-more-button">Read Full Review</button>
        </Link>
      </article>
    </li>
  );
}

export default ReviewCard
