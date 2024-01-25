'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

const MovieCard = ({ movie }) => {
    const router = useRouter();
    return (
        <div onClick={() => router.push(`/movie-detail/${movie.id}`)}
            className='flex flex-col items-center gap-5 rounded-lg overflow-hidden hover:scale-110 transition-all cursor-pointer'>
            <div className='flex min-w-[200px] relative'>
                <img src={`https://image.tmdb.org/t/p/original/${movie?.poster_path || movie?.backdrop_path}`} alt="poster" width={300}/>
                <div className='absolute bottom-0 p-3 justify-end flex flex- opacity-0 hover:opacity-100 '>
                    <div className='text-cyan-50 hover:opacity-80 transition-opacity text-xl'>
                        {movie?.title}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard