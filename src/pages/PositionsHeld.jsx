import React from 'react'
import MoviesDetails from './MoviesDetails'
// import MoviesCotext from "./../config/MoviesandSeriesConfig"
const MoviesCotext = {
    Contenttype:"PositionsHeld",
   
}

const PositionsHeld = () => {
  return (
    <MoviesDetails context={MoviesCotext}/>
  )
}

export default PositionsHeld