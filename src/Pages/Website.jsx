import React from 'react'

import Hero from "../componets/Hero/Hero";
import Residencies from "../componets/Residencies/Residencies";
import Value from "../componets/Value/Value";
import Contact from "../componets/Contact/Contact";
import GetStarted from "../componets/GetStarted/GetStarted";


const Website = () => {
  return (
    <div className="App">
    <div>
      <div className="white-gradient"/>
   
    <Hero/>
   </div>
   <Residencies/>
   <Value/>
   <Contact/>
   <GetStarted/>
 
  </div>
  )
}

export default Website