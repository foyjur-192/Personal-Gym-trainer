import { useEffect, useState } from "react"
const Review = () => {
   
     const [reviews, setReviews] = useState([]);

        useEffect(() => {
        fetch('reviews.JSON')
        .then(res => res.json())
        .then(data => setReviews(data));
        },[])
       
        return[reviews, setReviews];
    }

export default Review;