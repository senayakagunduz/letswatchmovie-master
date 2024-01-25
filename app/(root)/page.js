import Carousel from "@/components/Carousel";
import MovieCard from "@/components/MovieCard";
import Spacer from "@/components/Spacer";
import React from 'react'


const getMoviesByGenre = async (genre) => {
    const resp = await fetch(`https://api.themoviedb.org/3/movie/${genre}?api_key=${process.env.API_KEY}&language=en-US&page=1`, {
        next: {
            revalidate: 60
        }
    })
    const data = await resp.json()
    return data;
}
const getMixMovies = async (genre) => {
    const resp = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=1`, {
        next: {
            revalidate: 60
        }
    })
    const data = await resp.json()
    return data;
}

const Home = async ({ searchParams }) => {
    console.log(searchParams.genre);

    const movieByGenre = getMoviesByGenre(searchParams.genre);
    const movieMix = getMixMovies();

    const [dataGenre, dataMix] = await Promise.all([
        movieByGenre, movieMix
    ])
    return (
        <div className="bg-slate-900">
            <div className="flex items-center justify-center flex-column">
                {
                    searchParams.genre ? null : <Carousel />
                }
            </div>
            {/* <Spacer background="bg-slate-900" /> */}
            <div className="container flex flex-col gap-6 py-[4rem] mx-auto">
                <h2 className="text-yellow-300 text-2xl font-semibold pl-8" >{searchParams?.genre?.toUpperCase().replace(/_/g, ' ')}</h2>
                <div className="flex justify-center gap-10 flex-wrap relative">
                    {
                        !searchParams.genre ? dataMix?.results?.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} />
                        )) : dataGenre?.results?.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Home


{/* <div className="bg-black flex items-center justify-center">
            <Carousel/>
        </div>
        <Spacer background="black" />
        <div className="bg-black flex-column ">
            <div className="flex items-center justify-start px-40 pb-5">
                <span className="text-3xl text-yellow-500 font-bold">Today</span>
            </div>
            <div className="flex items-center justify-center">
               <Movie/>
            </div>
        </div> */}
{/* <Spacer background="black"/> */ }