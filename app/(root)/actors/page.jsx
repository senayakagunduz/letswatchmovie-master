'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Actors = () => {
  const [datas, setDatas]=useState([])
  const api_url='https://api.themoviedb.org/3/trending/person/day'

  const options={
    method:'GET',
    url:api_url,
    params:{language:'en-US'},
    headers:{
      accept:'application/json',
      Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzA4N2ZiNTdiNWUxMjgzMmFkYjdhMzY5YzEzYTJjZSIsInN1YiI6IjYyMzRhNGQ0ZDdjZDA2MDAxY2RiMDEyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T3ktH2EHJ_SwM0hzVpzXIRZ1HSYIsOBpsNG8_MHUfI8'
    }
  }
  const loadData=async()=>{
    try {
      const resp=await axios(options);
      console.log(resp.data)
      setDatas(resp.data.results);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    loadData()
  },[])
  console.log(datas,"datas")
  return (
    <div className='flex items-center justify-center flex-wrap  px-10 bg-slate-900'>
        {
          datas.map((person)=>(
            <div className='flex min-w-[300px] h-full gap-2 mt-10 relative '>
              <img src={`https://image.tmdb.org/t/p/w200/${person.profile_path}`} alt="poster" className='cursor-pointer rounded-lg'/>
              <div className='absolute bottom-0 p-3 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100'>
                <div className='text-cyan-50 hover:opacity-80 transition-opacity text-xl'>{person.name}</div>
              </div>
            </div>
          ))
        }
    </div>
  )
}

export default Actors