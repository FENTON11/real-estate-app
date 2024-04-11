import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className='f-wrapper'>
        <div className='paddings innerWidth flexCenter f-container'>

            {/* left side */}
            <div className='flexColStart f-left'>
                <p className='primaryText'>BEST HOMES</p>
                <span className='secondaryText'>
                  Our vision is to make all people <br/>
                  have a better place to live in.
                </span>
            </div>

            {/* right side */}
            <div className='flexColStart f-right'>
                <span className='primaryText'>Information</span>
                <span className='secondaryText'> 111 Nairobi, JR 3450 Kenya</span>

                < div className='flexCenter f-menu'>
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer