import { Link } from "react-router-dom";

const CarsSection = () => {
  return (
    <div className="header">
      <h1>The First Site for Selling Cars</h1>
      <hr />
      <p>
        Discover the best selection of cars at unbeatable prices. Find your
        perfect ride today!
      </p>
      <Link to="/cars">
        <button>Checkout our CARS</button>
      </Link>
    </div>
  );
};

export default CarsSection;
