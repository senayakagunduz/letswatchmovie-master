import Link from 'next/link'
import React from 'react'

const MenuItem = ({menu}) => {
  return (
    <Link href={menu.url} className='text-yellow-300 hidden lg:block'>{menu.name}</Link>
  )
}

export default MenuItem