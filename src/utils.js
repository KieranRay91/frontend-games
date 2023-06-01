import axios from 'axios';


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