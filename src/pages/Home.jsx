import HeroSection from "../components/HeroSection";
import Reviews from "../components/Reviews";

import {reviews} from '../data/reviews'

function Home() {
  return (
    <>
      <HeroSection />
      <Reviews data={reviews} />
    </>
  );
}

export default Home;
