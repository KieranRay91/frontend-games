function VoteButton({ votes, setVotes, onClick }) {
  const handleUpvote = () => {
    onClick(1);
    setVotes(votes + 1);
  };

  const handleDownvote = () => {
    onClick(-1);
    setVotes(votes - 1);
  };

  return (
    <div className="vote-buttons">
      <button className="upvote-button" onClick={handleUpvote}>
        Upvote
      </button>
      <button className="downvote-button" onClick={handleDownvote}>
        Downvote
      </button>
    </div>
  );
}

export default VoteButton;

