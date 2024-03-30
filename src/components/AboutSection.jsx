import about from "../assets/about.jpg";

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="content">
        <h2>About Us</h2>
        <p>
          Welcome to the first cars selling site! At our dealership, we pride
          ourselves on offering the finest selection of quality vehicles at
          competitive prices. Whether you're in the market for a sleek sedan, a
          reliable SUV, or a powerful truck, we have the perfect ride to suit
          your needs. With our hassle-free buying process and friendly staff,
          finding your dream car has never been easier. Explore our inventory
          today and drive away in style!
        </p>
      </div>
      <div className="image">
        <img src={about} alt="About Image" />
      </div>
    </div>
  );
};

export default AboutSection;
