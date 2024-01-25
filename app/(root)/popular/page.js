'use client'
import React, { useEffect } from 'react'
import axios from 'axios';


const Popular = async ({searchParams}) => {
  
    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/genre/movie/list',
        params: { language: 'en' },
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzA4N2ZiNTdiNWUxMjgzMmFkYjdhMzY5YzEzYTJjZSIsInN1YiI6IjYyMzRhNGQ0ZDdjZDA2MDAxY2RiMDEyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T3ktH2EHJ_SwM0hzVpzXIRZ1HSYIsOBpsNG8_MHUfI8',
          accept: 'application/json',
        },
      };

      const loadData=async()=>{
        try {
            const response=await axios.request(options);
            console.log(response.data,"popular data")
        } catch (error) {
            console.log(error,"error")
        }
      }
    useEffect(()=>{
        loadData()
    },[])
    return (
        <div>
            {
                
            }
        </div>
    )
}

export default Popular