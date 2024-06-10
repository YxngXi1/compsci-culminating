import React from 'react'
import Image from 'next/image'
import Quiz from '@/components/Quiz'



const page = () => {
  return (
    <section>
      <div className='flex my-20 flex-col h-full items-center justify-center text-center'>
        <h1 className='mb-4 '>Functions</h1>
        <Image 
          src='/images/functions.png'
          width={500}
          height={300}
          alt='functions'
        / >
        <div className=' flex  justify-center items-center text-center gap-8 mx-8 my-12'>
        <p className='w-full flex justify-center items-center h-full text-base'>
          A function is a line of code that will be used multiple times. Essentially in scenarios where you need to do the same thing twice, you can create a function, and instead of copy and pasting that same code twice, you only need to call upon that function twice, with the code only being created once. Functions basically just look like this: def functionName( parameter1, paremeter2, ...): ‘’’ Description of what the function does ‘’’ #body of the function return expression. Def is required for you to create the function, it is defining the function. functionName is the name of the function, which like all forms of documentation has to be clear on the purpose. parameter# is a parameter that the function accepts. The definition of a parameter is a variable that is defined in the function definition. The parameters can only be used inside the function, and are treated just like variables. It can also be blank if the function doesn’t need to manipulate any information. ‘’’ Description ‘’’ is used to be able to describe the purpose of the function. The body is what your function will do, and it is usually short, as it should usually be used to perform tasks repeatedly. The return will return back to the part of your code where you called on the function, or return a value. It doesn’t always need to return a variable. Functions ALWAYS need to be defined before actually using them within the code, as such they always need to be at the top of the code. Any variables that are inside a function only exist within tht function, and functions should only use parameters to receive information and shouldn’t be the one using an input to be able to get the information. Furthermore, variables are passed into functions by placing them within the brackets of the function being called. For example, if I have a function called functionName and it has 3 parameters, I would pass in 3 variables like so: functionName(variable1, variable2, variable3). Then in the def functionName(name, age, date) the variable1 will become the name variable that is used within the function, variable2 will become age, variable3 becomes date. In the code found above, you can see the defining of the function, along with the variables that will be used multiple times throughout the code. Then there is the body of the code where it does all it needs to do, to keep on creating a grid for our wordle game. Then, at the very end of the function you will see it return the pastList, and resultList, which are two things that we need at the area of the code where the function is being called.
        </p>
        </div>
      </div>
      <div>
        <Quiz 
          question="What is a function’s main function?"
          answers={["To do the same thing multiple times, and obtain different results, and to be able to simpliy your code by being able to put less information into your code.", "to iterate through a list", "to create a new branch", "to improve readability of your code"]}
          correctAnswer="To do the same thing multiple times, and obtain different results, and to be able to simpliy your code by being able to put less information into your code."
        />
        <Quiz 
          question="What does the def of the function do?"
          answers={["defining the function", "name of the function, which like all forms of documentation has to be clear on the purpose", "a parameter that the function accepts", "describe the purpose of the function", "what your function will do, and it is usually short, as it should usually be used to perform tasks repeatedly", "will return back to the part of your code where you called on the function, or return a value"]}
          correctAnswer="defining the function"
        />
        <Quiz 
          question="What does the variableName of the function do?"
          answers={["defining the function", "name of the function, which like all forms of documentation has to be clear on the purpose", "a parameter that the function accepts", "describe the purpose of the function", "what your function will do, and it is usually short, as it should usually be used to perform tasks repeatedly", "will return back to the part of your code where you called on the function, or return a value"]}
          correctAnswer="name of the function, which like all forms of documentation has to be clear on the purpose"
        />
        <Quiz 
          question="What does the parameter# of the function do?"
          answers={["defining the function", "name of the function, which like all forms of documentation has to be clear on the purpose", "a parameter that the function accepts", "describe the purpose of the function", "what your function will do, and it is usually short, as it should usually be used to perform tasks repeatedly", "will return back to the part of your code where you called on the function, or return a value"]}
          correctAnswer="a parameter that the function accepts"
        />
        <Quiz 
          question="What does the '''Description''' of the function do?"
          answers={["defining the function", "name of the function, which like all forms of documentation has to be clear on the purpose", "a parameter that the function accepts", "describe the purpose of the function", "what your function will do, and it is usually short, as it should usually be used to perform tasks repeatedly", "will return back to the part of your code where you called on the function, or return a value"]}
          correctAnswer="describe the purpose of the function"
        />
        <Quiz 
          question="What does the body of the function do?"
          answers={["defining the function", "name of the function, which like all forms of documentation has to be clear on the purpose", "a parameter that the function accepts", "describe the purpose of the function", "what your function will do, and it is usually short, as it should usually be used to perform tasks repeatedly", "will return back to the part of your code where you called on the function, or return a value"]}
          correctAnswer="what your function will do, and it is usually short, as it should usually be used to perform tasks repeatedly"
        />
        <Quiz 
          question="What does the return of the function do?"
          answers={["defining the function", "name of the function, which like all forms of documentation has to be clear on the purpose", "a parameter that the function accepts", "describe the purpose of the function", "what your function will do, and it is usually short, as it should usually be used to perform tasks repeatedly", "will return back to the part of your code where you called on the function, or return a value"]}
          correctAnswer="will return back to the part of your code where you called on the function, or return a value"
        />
        <Quiz 
          question="Where do functions need to be defined?"
          answers={["where it is called", "At the top of the program", "At the bottom", "in a seperate file"]}
          correctAnswer="At the top of the program"
        />
        <Quiz 
          question="What will happen if I use a variable that is only found within the function?"
          answers={["Everything works fine", "Nothing", "it will give me an error, and tell me exactly what to fix", "python interprator will figure it out"]}
          correctAnswer="Nothing"
        />
        <Quiz 
          question="How do you call upon functions?"
          answers={["functionName()", "functionName(variables you want to pass through)", "run functionName", "function functionName(variables you want to pass through)"]}
          correctAnswer="functionName(variables you want to pass through)"
        />
      </div>
    </section>
  )
}

export default page