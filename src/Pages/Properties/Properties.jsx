import React, { useState } from 'react'
import SearchBar from '../../componets/SearchBar/SearchBar'
import "./Properties.css"
import useProperties from '../../componets/hooks/useProperties'
import PropertyCard from '../../componets/PropertyCard/PropertyCard'
import { PuffLoader } from 'react-spinners';

const Properties = () => {
  const [filter, setFilter] = useState("")
  // custom hook
  const {data, isError, isLoading} = useProperties()
 
  if(isError){
    return(
      <div className='wrapper'>
        <span>Error while fetching data</span>
      </div>
    )
  }
  if(isLoading){
  return(
    <div className='wrapper flexCenter' style={{height: "60vh"}}>
      <PuffLoader
      height="80"
      width="80"
      radius={1}
      color='#4066ff'
      aria-label='puff-loading'
      />
    </div>
  )
  }



  return (
    <div className='wrapper'>
        <div className='flexColCenter paddings innerWidth search-bar properties-container'>
            <SearchBar filter={filter} setFilter={setFilter}/>
   
         <div className='paddings flexCenter properties'>
          {
           // data.slice(6,15).map((card, i)=> (<PropertyCard card={card} key={i}/>) ) // mapping through property listings array

           data
           .filter((property)=> 
           property.title.toLowerCase().includes(filter.toLowerCase()) ||
           property.city.toLowerCase().includes(filter.toLowerCase()) ||
           property.country.toLowerCase().includes(filter.toLowerCase()) 
           )
           .map((card, i)=> 
           (<PropertyCard card={card} key={i}/>) )
           
          }
          
            
         </div>


        </div>
    </div>
  )
}

export default Properties