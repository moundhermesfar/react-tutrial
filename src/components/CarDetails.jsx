import { useParams } from "react-router-dom";

const CarDetails = () => {
  const { carID } = useParams();
  return (
    <div className="car-details-container">
      <h1>CAR DETAILS about {carID}</h1>
    </div>
  );
};

export default CarDetails;
