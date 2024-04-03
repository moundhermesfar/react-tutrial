import aboutImage from "../assets/about.jpg";

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to the first cars selling site! We are dedicated to providing
        the best selection of quality vehicles at unbeatable prices. Our mission
        is to make buying and selling cars a hassle-free experience for our
        customers.
      </p>
      <img src={aboutImage} alt="About Us" className="about-image" />
    </div>
  );
};

export default AboutUs;
