import AboutSection from "../components/AboutSection";
import CarsSection from "../components/CarsSection";
import HeroSection from "../components/HeroSection";
import Reviews from "../components/Reviews";

import { reviews } from "../data/reviews";

function Home() {
  return (
    <>
      <HeroSection />
      <CarsSection />
      <AboutSection />
      <Reviews reviews={reviews} />
    </>
  );
}

export default Home;
