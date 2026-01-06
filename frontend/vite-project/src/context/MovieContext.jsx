import { createContext,useState } from "react";
import moviesdata from "../data/moviesData";

import React from 'react'
//import movies from "../data/moviesData";

export const MovieContext = createContext();

const MovieProvider = ({children}) => {
    const[movies,setMovies]=useState(moviesdata);

  return (
   <MovieContext.Provider  value={{movies,setMovies}}>
         {children}
   </MovieContext.Provider>
  )
}

export default MovieProvider;