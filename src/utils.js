import axios from 'axios';

export function formatDate(date) {
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(new Date(date));
  
    return formattedDate;
  }

const gamesApi = axios.create({
    baseURL: `https://games-reviews-and-discussions.onrender.com/api`
})

export function fetchAllReviews(category){
  return gamesApi.get('/reviews', { params: { category: category  } }).then((res) => {
        return res.data.reviews;
    })
  }

export function fetchSingleReview(review_id) {
    return gamesApi.get(`/reviews/${review_id}`).then((res) => { 
      return res.data.review;
    })
}

export function fetchCommentsByReviewId(review_id) {
    return gamesApi.get(`/reviews/${review_id}/comments`).then((res) => {
       return res.data.comments;
    })
}

export function updateVotesByReviewId(review_id, value) {
    const voteData = {
        inc_votes: value
      };
    return gamesApi.patch(`/reviews/${review_id}`, voteData).then((res) => {
        return res.data.review;
    })
}

export function postComment(name, userComment, review_id) {
    const newComment = {
        body: userComment,
        username: name,
    }
    return gamesApi.post(`/reviews/${review_id}/comments`, newComment).then((res) => {
      return res.data.addedComment;
       
    })
}

export function fetchCategories() {
  return gamesApi.get('/categories').then((res) => {
    return res.data.categories;
  })
}

