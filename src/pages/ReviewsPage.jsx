import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import Reviews from "../components/Reviews";

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch(
        "https://cars-api-1lde.onrender.com/api/reviews/get-reviews"
      );
      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.log("Error fetching reviews", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="header">
        <h1>Reviews</h1>
        <hr />
      </div>
      {loading ? (
        <Spinner />
      ) : reviews.length < 1 ? (
        <div style={{ textAlign: "center" }}>
          <h2 style={{ textAlign: "center" }}>No reviews yet</h2>
          <h3>
            Be the first to{" "}
            <Link to="/about" style={{ textAlign: "center" }}>
              leave a review
            </Link>
          </h3>
        </div>
      ) : (
        <Reviews reviews={reviews} />
      )}
    </div>
  );
};

export default ReviewsPage;
