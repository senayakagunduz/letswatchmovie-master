import React from 'react'

const Spacer = ({height=100, background='bg-slate-800'}) => {
  return (
    <div style={{height:height, background:background}}></div>
  )
}

export default Spacer