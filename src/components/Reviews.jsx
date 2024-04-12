import Review from "./Review";

const Reviews = ({ reviews }) => {
  return (
    <div className="reviews-container">
      {reviews.map((review, index) => (
        <Review key={index} review={review} />
      ))}
    </div>
  );
};

export default Reviews;
