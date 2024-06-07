import React from 'react'

const Navbar = () => {
  return (
    <div className='flex w-full absolute justify-between p-10'>
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
          <button>function</button>
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