"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Movie = () => {
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
        <div className='flex gap-5 mt-8 place-items-start md:place-items-center relative'>
            {
                movieList.map((movie) => (
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                    ))
            }
        </div>
    )
}

export default Movie
// const getMovie=()=>{
//     fetch("https://api.themoviedb.org/3/discover/movie?api_key=2c087fb57b5e12832adb7a369c13a2ce")
//     .then(resp=>resp.json())
//     .then(json=>setMovieList(json.results))
// }