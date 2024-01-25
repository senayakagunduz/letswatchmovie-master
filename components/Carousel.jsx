"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Carousel = () => {
    const [movieList, setMovieList] = useState([])
    const [currentIndex, setCurrentIndex]=useState(0);

    const handlePrev=()=>{
        setCurrentIndex((prevIndex)=>(prevIndex>0 ? prevIndex-1 : movieList.length-1))
    }
    const handleNext=()=>{
        setCurrentIndex((prevIndex)=>(prevIndex<movieList.length-1 ? prevIndex+1 :0))
    }

    const loadData = async () => {
        const Base_URL = "https://api.themoviedb.org/3/discover/movie"
        const Api_KEY = "2c087fb57b5e12832adb7a369c13a2ce"
    
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
        <div className="carousel flex justify-center w-full h-[700px] pt-5 pb-10 relative ">
            {
                movieList.map((movie,index) => (
                    <div id={movie.id} key={movie.id} className={`carousel-item absolute w-full transform transition-transform duration-300 ${index===currentIndex ? 'opacity-100 translate-x-0':'opacicity-0 translate-x-full'}`}>
                        <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`} className="w-full h-full object-cover rounded-lg" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <div onClick={handlePrev} className="btn btn-circle hover:text-yellow-500">❮</div>
                            <div onClick={handleNext} className="btn btn-circle  hover:text-yellow-500">❯</div>
                        </div>
                    </div>
                ))
            }


        </div>
    )
}

export default Carousel

{/* <div id="slide2" className="carousel-item relative  w-full">
<img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide1" className="btn btn-circle  hover:text-yellow-500">❮</a>
    <a href="#slide3" className="btn btn-circle  hover:text-yellow-500">❯</a>
</div>
</div>
<div id="slide3" className="carousel-item relative w-full">
<img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide2" className="btn btn-circle  hover:text-yellow-500">❮</a>
    <a href="#slide4" className="btn btn-circle  hover:text-yellow-500">❯</a>
</div>
</div>
<div id="slide4" className="carousel-item relative w-full">
<img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide3" className="btn btn-circle  hover:text-yellow-500">❮</a>
    <a href="#slide1" className="btn btn-circle  hover:text-yellow-500">❯</a>
</div>
</div> */}