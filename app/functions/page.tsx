import React from 'react'
import Image from 'next/image'
import DQuiz from '@/components/DQuiz'

const page = () => {
  return (
    <section>
      <div className='flex  flex-col h-screen items-center justify-center text-center'>
        <h1 className='mb-4 '>Functions</h1>
        {/* image will go in here */}
        <div className=' flex  justify-center items-center text-center gap-8 mx-8 '>
            <h1 className=' w-5/12 '>what is the "fuctnion" of life</h1>
            <p className=' w-5/12  flex justify-center items-center h-full text-xs'>functions are pretty poggers</p>
        </div>
      </div>
      <div>
        <DQuiz />
      </div>
    </section>
  )
}

export default page