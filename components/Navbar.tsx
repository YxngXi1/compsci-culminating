"use client"

import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={`${isScrolled ? 'bg-white' : 'bg-transparent'} flex w-full fixed top-0 z-10 justify-between p-10 transition-colors duration-500 ease-in-out`}>
      <div className='w-1/12'>
        <a href='/'>
          <button>Home</button>
        </a>
      </div>
      <div className='flex flex-wrap gap-2'>
        <a href='/documentation'>
          <button>Documentation</button>
        </a>
        <a href='/functions'>
          <button>Function</button>
        </a>
        <a href='/if-statements'>
          <button>If Statements</button>
        </a>
        <a href='/variables'>
          <button>Variables</button>
        </a>
        <a href='/loops'>
          <button>Loops</button>
        </a>
      </div>
    </div>
  )
}

export default Navbar