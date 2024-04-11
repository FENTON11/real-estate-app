import React, { useState } from 'react'
import'./Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'
import { Link, NavLink } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import ProfileMenu from '../ProfileMenu/ProfileMenu'
import AddPropertyModal from '../AddPropertyModal/AddPropertyModal'
import useAuthCheck from "../hooks/useAuthCheck"
const Header = () => {
  const[menuOpened, setMenuOpened] = useState(false)
  const [modalOpened, setModalOpened] = useState(false)
  const {validateLogin} = useAuthCheck();
  const handleAddPropertyClick = () =>{
       if(validateLogin()){
        setModalOpened(true)
       }
  }

  const getMenuStyles = (menuOpened) =>{
    if (document.documentElement.clientWidth <= 800) // check the with of the device
    {
      return{right: !menuOpened && "-100%"} // push the menu to out of view

    }
  }
  const {loginWithRedirect, isAuthenticated, user, logout} = useAuth0()



  return (
   <section className='h-wrapper'>
    <div className=' flexCenter paddings innerWidth h-container'>
      <Link to="/">
      <p>BEST HOMES</p>
      </Link>
      <OutsideClickHandler 
       onOutsideClick={()=> {
        setMenuOpened(false)
       }}
      >
      <div className=' flexCenter h-menu'
      style={getMenuStyles(menuOpened)}//passing menu prop
      >
        <NavLink to ="/properties">Properties</NavLink>
        
        <a href='mailto:fencurt99@gmail.com'>Contact</a>

        {/* add property*/}
        <div onClick={ handleAddPropertyClick}>Add Property</div>
        <AddPropertyModal
        opened={modalOpened}
        setOpened = {setModalOpened}
        />

        {/* login button */}
         {!isAuthenticated ? (
          <button className='button' onClick={loginWithRedirect}>
          Login
        </button> 
         ) : (
         <ProfileMenu user={user} logout={logout}/>
         )}
        </div>
      </OutsideClickHandler>

      {/* for medium and small screens */}
      <div className='menu-icon' onClick={()=>setMenuOpened((prev)=>!prev)}>
      <BiMenuAltRight size={30}/>
    </div>
    </div>
    
   </section>
  )
}

export default Header