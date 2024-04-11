import React from 'react'
import "./Hero.css"
import SearchBar from '../SearchBar/SearchBar'

const Hero = () => {
  return (
  <section className='hero-wrapper'>
    <div className=' paddings innerWidth flexCenter hero-container'>
  {/* left side */}
  <div className=' flexColStart hero-left'>
    <div className='hero-title'>
        <h1>
            FIND YOUR <br/>
            NEXT HOME <br/>AND PROPERTY
        </h1>
    </div>
    <div className='flexColStart hero-description'>
    <span className='secondaryText'>Find a wide variety of properties that suits you very easily</span>
    <span className='secondaryText'>Forget all difficulties in finding a residence to live in</span>
    
   </div>
   <SearchBar/>
  

  </div>
   {/* right side */}
   <div className=' flexCenter hero-right'>
    <div className='image-container'>
      <img src="./hero.jpeg"alt=''/>
    </div>
   </div>
    </div>
  </section>
  )
}

export default Hero