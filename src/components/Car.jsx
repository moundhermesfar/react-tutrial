const Car = ({ car }) => {
  return (
    <div className="car-card">
      <strong className="car-name">{car.name}</strong>
      <img
        src={`data:${car.image.contentType};base64,${car.image.data}`}
        className="car-image"
        alt={car.name}
      />
      <strong className="car=price">{car.price} $</strong>
    </div>
  );
};

export default Car;
