import React from 'react'
import MoviesDetails from './MoviesDetails'
// import MoviesCotext from "./../config/MoviesandSeriesConfig"
const MoviesCotext = {
    Contenttype:"Elections",
    
}

const ElectionsContested = () => {
  return (
    <MoviesDetails context={MoviesCotext}/>
  )
}

export default ElectionsContested