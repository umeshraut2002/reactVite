import React, { useState } from 'react'

const Movies = () => {
    const [movie, setMovie] = useState({
        name : "Vikram",
        rating : 9
    })

    const updateNew = () => {
        setMovie({...movie, rating : 8});
    }

    return(
        <>
        <h1>Movie name: {movie.name}</h1>
        <h1>rating: {movie.rating}</h1>
        <button onClick={updateNew} >Update</button>
        </>
    )
}

export default Movies;