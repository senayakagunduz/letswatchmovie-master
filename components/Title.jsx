import React from 'react'

const Title = ({size='h1', color='yellow',text, background='bg-slate-800',fontWeight='font-bold'}) => {
  return (
    <span style={{fontSize:size, color, background:background, fontWeight:fontWeight}}>{text}</span>
  )
}

export default Title