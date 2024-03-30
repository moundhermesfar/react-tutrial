import Review from "./Review";

function Reviews({ data }) {
  return (
    <div className="reviews-container">
      {data.map((review, index) => (
        <Review key={index} review={review} />
      ))}
    </div>
  );
}

export default Reviews;
