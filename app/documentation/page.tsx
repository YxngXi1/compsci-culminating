import React from 'react'
import Image from 'next/image'
import DQuiz from '@/components/DQuiz'

const page = () => {
  return (
    <section>
      <div className='flex  flex-col h-screen items-center justify-center text-center'>
        <h1 className='mb-4 '>Documentation</h1>
        {/* image will go in here */}
        <div className=' flex  justify-center items-center text-center gap-8 mx-8 '>
            <h1 className=' w-5/12 '>what is documentation used for?</h1>
            <p className=' w-5/12  flex justify-center items-center h-full text-xs'>Code documentation is where software programmers document their code. This will usually result in better code in terms of readability, reproducibility, and reproduction by others who try to use your code. One of the most common methods of doing so is through the use of comments. Comments are used to be able to explain code to other people, and a README.md file is also often used to explain how to deploy a project locally. To be able to have truly clean code you need to have good variables that are descriptive enough to help people using your code know what it is for. You also need to have comments in multiple areas to explain what a block of code may do. The variable names used in this section play a large role in the program as they will often be called upon, and with a good name, it was easy for me to differentiate it from different variables, allowing others to be able to read it easier and for me to work more efficiently. The comments in this code are used to be able to show what the code is doing, in the case showed on the left below the “CODES:” are values that are later used within the code during the debugging and coding phases, and the legend helped us remember what each value would mean when we were testing. This played a major role throughout the development as Sohum and I had to communicate ideas and functions across code, and with a legend as shown, it helped me to understand the code better. Furthermore, when debugging and printing a certain variable, these values will be displayed, allowing people who use the code to understand what the issue may be. Headers are an alternative to a README.md and in this case it will be the one to provide the description of the file and what its purpose is along with the author of the file.</p>
        </div>
      </div>
      <div>
        <DQuiz />
      </div>
    </section>
  )
}

export default page