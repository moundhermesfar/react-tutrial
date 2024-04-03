import Review from "./Review";

function Reviews({ reviews }) {
  return (
    <div className="reviews-container">
      {reviews.map((review, index) => (
        <Review key={index} review={review} />
      ))}
    </div>
  );
}

export default Reviews;
