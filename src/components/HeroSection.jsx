import hero from '../assets/hero2.jpg'

function HeroSection() {
  return (
    <div className='hero-section'>
      <img src={hero} alt='hero'/>
      <div className="overlay">
        <h1>WELCOME TO CARSSO</h1>
        <p>Discover amazing cars here</p>
      </div>
    </div>
  )
}

export default HeroSection
