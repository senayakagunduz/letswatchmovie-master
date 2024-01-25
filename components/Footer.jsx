import React from 'react'
import "../app/globals.css"
import Link from 'next/link'

const Footer = () => {
  return (
      <footer className='footer flex items-center justify-center gap-x-40 py-7 bg-neutral text-neutral-content'>
        <nav>
          <header className='footer-title'>Films</header>
          <Link href="" className='link link-hover'>Branding</Link>
          <Link href="" className='link link-hover'>Branding</Link>
          <Link href="" className='link link-hover'>Branding</Link>
        </nav>
      </footer>
  )
}

export default Footer
