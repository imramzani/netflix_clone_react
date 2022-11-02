import axios from '../store/axios'
import React, { useEffect, useState } from 'react'
import './Row.css'

function Row({ title, fetchURL, isLargeRow = false }) {
  const [movies, setMovies] = useState([])
  const baseURL = "https://image.tmdb.org/t/p/original/"

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(fetchURL)
      setMovies(req.data.results)
      return req
    }
    fetchData()
  }, [fetchURL])

  console.log(movies)

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className="rowPosters">
        {movies.map((movie) => (
          <img
            src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie?.name}
            className={`rowPoster ${isLargeRow && "rowPosterLarge"}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Row