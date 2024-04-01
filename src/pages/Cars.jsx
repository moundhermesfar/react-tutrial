import { useEffect, useState } from "react";
import Car from "../components/Car";
import { Link, Outlet } from "react-router-dom";
import Spinner from "../components/Spinner";

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(
        "https://cars-api-1lde.onrender.com/api/cars/get-cars"
      );
      const data = await response.json();
      setCars(data);
      console.log(cars);
    } catch (err) {
      console.log("Error fetching cars", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="cars-container">
      <div className="cars">
        <div className="header">
          <h1>Ckeckout our cars</h1>
          <hr />
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <div className="car-grid">
            {cars.map((car) => (
              <Link to={`${car._id}`} key={car._id}>
                <Car car={car} />
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="carDetails-container">
        <h1>Car Details</h1>
        <Outlet />
      </div>
    </div>
  );
};

export default Cars;
