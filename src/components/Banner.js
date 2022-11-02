import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../store/axios'
import requests from '../store/request'

function Banner() {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    async function getMovie(){
      const req = await axios.get(requests.fetchNetflixOriginals)
      setMovie(
        req.data.results[
         Math.floor(Math.random() * req.data.results.length - 1)
        ]
      )
      return req
    }
    getMovie()
  }, [])

  console.log(movie)

  function truncate(str, n) {
    return str?.length > n ? str.substring(0, n-1) + '...' : str
  }

  return (
    <header 
      className='banner' 
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center"
      }}>
      
      <div className="bannerContent">
        <h1 className="bannerTitle">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="bannerButtons">
          <button className='bannerButton'>Play</button>
          <button className='bannerButton'>My List</button>
        </div>
        <h1 className="bannerDescription">
          {truncate(`${movie?.overview}`, 150)}  
        </h1> 
      </div>
      <div className="banner_fadeButton" />


    </header>
  )
}

export default Banner