import React from 'react'
import'./Contact.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
const Contact = () => {
  return (
   <section className='c-wrapper'>
    < div className='paddings innerWidth c-wrapper c-container'>
        {/*  left side  */}
        <div className='c-left  flexColStart c-wrapper'>
            <span className='orangeText'>Get In Touch With Us</span>
            <span className='primaryText' >Easy To Contact Us</span>
            <span className='secondaryText'>We are always ready to help you
            by providing the best services for you.We believe that a good place to live
            can make your life better. </span>

            <div className='flexColStart contactModes'>
                {/* first row */}
                <div className='flexStart row'>
                    <div className='flexColCenter mode'>
                        <div className='flexStart'>
                            <div className='flexCenter icon'>
                             <MdCall size={25}/>
                            </div>
                            <div className='flexColStart detail'>
                                <span className='primaryText'> Call </span>
                                <span className='secondaryText'> 0706502923</span>
                            </div>
                        </div>
                        < div className='flexCenter button'>Call Now</div>
                    </div>

                    {/* second mode */}
                    <div className='flexColCenter mode'>
                        <div className='flexStart'>
                            <div className='flexCenter icon'>
                             <BsFillChatDotsFill size={25}/>
                            </div>
                            <div className='flexColStart detail'>
                                <span className='primaryText'> Chat </span>
                                <span className='secondaryText'> 0706502923</span>
                            </div>
                        </div>
                        < div className='flexCenter button'>Chat Now</div>
                    </div>
                </div>

                {/* second row */}
                <div className='flexStart row'>
                    {/* third mode */}
                    <div className='flexColCenter mode'>
                        <div className='flexStart'>
                            <div className='flexCenter icon'>
                             <HiChatBubbleBottomCenter size={25}/>
                            </div>
                            <div className='flexColStart detail'>
                                <span className='primaryText'> Message </span>
                                <span className='secondaryText'> 0706502923</span>
                            </div>
                        </div>
                        < div className='flexCenter button'>Message Now</div>
                    </div>
                </div>
                
            </div>

        </div>
        {/* right side  */}
        < div className='c-right '>
            <div className='image-container2'>
                < img src="./contact.jpg" alt="house"/>
            </div>
        </div>
    </div>

   </section>
  )
}

export default Contact