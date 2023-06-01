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


export function fetchAllReviews(){
    return gamesApi.get('/reviews').then((res) => {
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