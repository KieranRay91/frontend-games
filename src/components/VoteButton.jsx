import { useState} from "react";
import { updateVotesByReviewId } from "../utils";


function VoteButton({ votes, setVotes, review_id}) {
  const [userVoted, setUserVoted] = useState(false);
  const [votedMessage, setVotedMessage] = useState('')
  const [error, setError] = useState("");

  const handleVote = (review_id, value) => {
    setUserVoted(true)
    updateVotesByReviewId(review_id, value)
      .then((updatedReview) => {
        setVotedMessage('Your vote has been cast!')
        setError("");
      })
      .catch((error) => {
        setUserVoted(false)
        console.error("Failed to update votes:", error);
        setError("Failed to update votes. Please try again.");
      })
  }

  const handleUpvote = () => {
    if(userVoted) {
      return
    } else {
    handleVote(review_id, 1);
    setVotes(votes + 1);
    }
  };

  const handleDownvote = () => {
    if(userVoted) {
      return 
    } else {
    handleVote(review_id, -1);
    setVotes(votes - 1);
    }
  };

  return (
    <div className="vote-buttons">
      <button className="upvote-button" onClick={handleUpvote}>
        Upvote
      </button>
      <button className="downvote-button" onClick={handleDownvote}>
        Downvote
      </button>
      {votedMessage && <p>{votedMessage}</p>}
    </div>
  );
}

export default VoteButton;

