import picanto from "../assets/picanto.jpg";

const Car = ({ car }) => {
  return (
    <div className="car-card">
      <strong className="car-name">{car.name}</strong>
      <img src={picanto} className="car-image" alt={car.name} />
      <strong className="car=price">{car.price} $</strong>
    </div>
  );
};

export default Car;
