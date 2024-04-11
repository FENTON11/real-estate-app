import React from 'react'
import { HiLocationMarker } from 'react-icons/hi'
const SearchBar = ({filter, setFilter}) => {
  return (
    <div className='v-wrapper flexcenter search-bar'>
    <HiLocationMarker color="var(--blue)" size={25}/>
    <input
    placeholder='Search by title/city/country...'
     id="search-input" 
     type='text'
     value={filter} 
     onChange={(e)=> setFilter(e.target.value)}
     />
    <button className='searchbutton button'>Search</button>
   </div>
  )
}

export default SearchBar