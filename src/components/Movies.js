
import React from "react"
import Movie from "./Movie"
// the component function
const Movies = ({ moviesArr }) => {

    //The Components Returned JSX
    return (
        <div className="Movies"> 
        {moviesArr.map((movie) => (
            <Movie key={movie.name} movie={movie} />
        ))} 
        <i class="fa-solid fa-biohazard fa-fade"></i>
        </div>
    )
}

// export the component
export default Movies