import ContactForm from '@/components/ContactForm'
import Map from '@/components/map'
import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col cursor-pointer bg-slate-900'>
      <div className='flex justify-center items-center '>
        <Map/>
      </div>
      <div className='flex flex-col justify-center items-center mx-auto p-10 my-6 rounded-md bg-slate-500 '>
        <ContactForm/>
      </div>
    </div>
  )
}

export default Contact