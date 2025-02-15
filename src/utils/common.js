export const sliderSettings = {
    slidesPerView: 1,
    spaceBetween: 50,
    breakpoints: {
      480: {
          slidesPerView: 1
      },
      600: {
          slidesPerView: 2
      },
      750: {
          slidesPerView: 3
      },
      1100: {
           slidesPerView: 4
      } 
    }
}
export const updateFavourites = (id, favourites)=>{
    if(favourites.includes(id))
    {
        return favourites.filter((resId)=> resId!==id)
    }
    else{
        return [...favourites, id]
    }
}
export const checkFavourites = (id, favourites) => {
    // Check if favourites is defined and an array
    if (Array.isArray(favourites) && favourites.includes(id)) {
        return "#fa3e5f";
    } else {
        return "white";
    }
};

export const validateString = (value)=> {
   return  value?.length < 3 || value === null? "Must have atleast 3 characters": null;
}


