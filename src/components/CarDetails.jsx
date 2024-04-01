import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";

function CarDetails() {
  const { carID } = useParams();
  const [car, setCar] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://cars-api-1lde.onrender.com/api/cars/get-car/${carID}`
        );
        const data = await response.json();
        setCar(data);
        console.log(car);
      } catch (error) {
        console.error("Error fetching cars:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [carID]);

  return (
    <div>
      {!car ? (
        <h2>Pick a car to previw it here</h2>
      ) : loading ? (
       <Spinner />
      ) : (
        <div className="car-details-container">
          <img
            className="car-image"
            src={`data:${car.image.contentType};base64,${car.image.data}`}
            alt={car.name}
          />
          <p className="car-description">{car.description}</p>
          <span className="car-price">{car.price} $</span>
        </div>
      )}
    </div>
  );
}

export default CarDetails;
