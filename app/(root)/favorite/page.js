'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Favorites = () => {
  const Base_URL = "https://api.themoviedb.org/3/discover/movie"
  const Api_KEY = "2c087fb57b5e12832adb7a369c13a2ce"
  const [movieList, setMovieList] = useState([])

  const loadData = async () => {
    try {
      const response = await axios.get(`${Base_URL}?api_key=${Api_KEY}`)
      setMovieList(response.data)
      setMovieList(response.data.results)
    } catch (error) {
      console.log("Error while fetching data", error)
    }
  }
  useEffect(() => {
    loadData()
  }, [])

  console.log(movieList)
  return (
      <div className='flex flex-wrap bg-slate-900 gap-5 place-items-start md:place-items-center py-8 px-20'>
          {
            movieList.map((movie) => (
              <img style={{ width: "300px", marginLeft: "10px", marginTop: "30px" }} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            ))
          }
      </div>
  )
}

export default Favorites
