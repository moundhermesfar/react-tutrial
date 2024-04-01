import picanto from "../assets/picanto.jpg";
import Car from "../components/Car";

import { Link, Outlet } from "react-router-dom";

const Cars = () => {
  const cars = [
    {
      id: 1,
      name: "picatno",
      price: "300000",
      discription:
        "skhgks ahfjah vhlah fljkahjklhakljgh skjdghksljh dgjkshdglk shgshgjks nskjgh skjngjkds hgshg",
      image: { picanto },
    },
    {
      id: 2,
      name: "picatno",
      price: "300000",
      discription:
        "skhgks ahfjah vhlah fljkahjklhakljgh skjdghksljh dgjkshdglk shgshgjks nskjgh skjngjkds hgshg",
      image: { picanto },
    },
    {
      id: 3,
      name: "picatno",
      price: "300000",
      discription:
        "skhgks ahfjah vhlah fljkahjklhakljgh skjdghksljh dgjkshdglk shgshgjks nskjgh skjngjkds hgshg",
      image: { picanto },
    },
    {
      id: 4,
      name: "picatno",
      price: "300000",
      discription:
        "skhgks ahfjah vhlah fljkahjklhakljgh skjdghksljh dgjkshdglk shgshgjks nskjgh skjngjkds hgshg",
      image: { picanto },
    },
  ];

  return (
    <div className="cars-container">
      <div className="cars">
        <div className="header">
          <h1>Ckeckout our cars</h1>
          <hr />
        </div>
        <div className="car-grid">
          {cars.map((car, index) => (
            <Link to={`${car.id}`} key={index}>
              <Car car={car} />
            </Link>
          ))}
        </div>
      </div>
      <div className="carDetails-container">
        <h1>Car Details</h1>
        <Outlet />
      </div>
    </div>
  );
};

export default Cars;
