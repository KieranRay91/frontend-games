

function ReviewCard({ title, image, owner, votes }) {
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
      </article>
    </li>
  );
}

export default ReviewCard;
