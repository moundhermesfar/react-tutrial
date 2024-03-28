import {FaStar} from 'react-icons/fa'

function Review({review}) {
  return (
    <div className="review">
      <div className="rating">
        {[...Array(review.rating)].map((_, index) => (
          <FaStar key={index} />  
        ))}
      </div>
      <p>{review.body}</p>
    </div>
  )
}

export default Review
