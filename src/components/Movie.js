
// import movies from "../App"
import React from "react"


const Movie = ({ movie }) => {

    return (
        <div className="Movie"> 
            <div className="sidebar">
                <div className="movie-main">
                    <h1 className="movie-name">{movie.name}</h1>
                </div>

            <img className="movie-image" src={movie.image} 
                    alt={movie.name} />
            
            <ul className="list">
                <li className="item">
                    <p className="year"> Year: {movie.year}</p>
                </li>
                <li>
                    <p className="rating"> Rating: {movie.rating}</p>
                </li>
            </ul>
            
            </div>
        </div>
    )
}

export default Movie