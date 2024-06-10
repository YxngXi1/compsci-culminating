import React from 'react'
import Image from 'next/image'
import Quiz from '@/components/Quiz'



const page = () => {
  return (
    <section>
      <div className='flex my-20 flex-col h-full items-center justify-center text-center'>
        <h1 className='mb-4 '>Loops</h1>
        <Image 
          src='/images/loops.png'
          width={1000}
          height={500}
          alt='documentation'
        / >
        <div className=' flex  justify-center items-center text-center gap-8 mx-8 my-12'>
        <p className='w-full flex justify-center items-center h-full text-base'>
        Loops are used to repeat instructions how many times you want, the two major types of loops are for and while. For loops often look like this: [for iterator in range(star, stop, step):] An iterator is a variable that is created and can only be used within the loop, it changes every time the loop starts over. The range creates a list of values that the iterator can be while inside the for loop. Start is the starting integer, stop is the ending integer, step is the value the iterator changes by each time the loop restarts. You can also use for loops to be able to iterate through letters in a string. Then, you are able to do whatever you want with the letters in that string. While loops just keep on doing something until the conditions are no longer True. It is very similar to an if statement, and all the conditions and chains can also be used in while loops as in if statements, as it is ust checking for the truthfulness. While loops also contain an else statement which will be run the moment the loop becomes false. While loops are used when you don’t know how many times you want to run it, and a for loop is only when you know how many times you want it to run. NOTE: WHILE LOOPS ONLY CHECK THE CONDITION FIRST AT THE BEGGINING OF EACH ITERATION, NOT CONSTANTLY. There are a few commands that you have access to when creating loops and those include break, where you exit out of a loop, it should nEVER BE USED AS THE ONLY EXIT CONDITION. Continue is used to jump back to the beginning of a loop, pass is to be used temporarily when you are changing code in other areas to make sure your code does not die. While True should just never be used, but it essentially will keep the code running indefinitely until a break.
        </p>
        </div>
      </div>
      <div>
        <Quiz 
          question="What are loops for?"
          answers={["to print out a string", "convert between booleans", "to check if a statements is true", "they are to repeat instructions as many times as you want"]}
          correctAnswer="they are to repeat instructions as many times as you want"
        />
        <Quiz 
          question="What are the two major types of loops?"
          answers={["while and such loops", "for and repeating loops", "there are too many!", "for and while loops"]}
          correctAnswer="for and while loops"
        />
        <Quiz 
          question="What is an iterator?"
          answers={["An iterator is a variable that is created and can only be used within the loop", "a function that is run throughout the loop", " a way to exit a loop"]}
          correctAnswer="An iterator is a variable that is created and can only be used within the loop"
        />
        <Quiz 
          question="What is a start, stop, and step?"
          answers={["Start is the starting integer, stop is the ending integer, step is the value the iterator changes by each time the loop restarts", "Start is the ending integer, stop is the starting integer, step is the value the iterator changes by each time the loop restarts"]}
          correctAnswer="Start is the starting integer, stop is the ending integer, step is the value the iterator changes by each time the loop restarts"
        />
        <Quiz 
          question="What is an interesting functionality of a for loop when working with strings?)"
          answers={["to look cool", "you can iterate through and get each individual letter", "to print the same string over and over a lot of times (uninteresting)", "for professionalism and documentation"]}
          correctAnswer="you can iterate through and get each individual letter"
        />
        <Quiz 
          question="What is a while loop and for loop?"
          answers={["a while loop is something that keep on working until it stops, a for loop runs through it a certain amount of time", "a while loop NEVER stops, a for loop will stop eventually", "while loops are more complicated"]}
          correctAnswer="a while loop is something that keep on working until it stops, a for loop runs through it a certain amount of time"
        />
        <Quiz 
          question="What do while loops and if statements have in common?"
          answers={["they are complex structures", "they create branches", "they contain else, conditions, and chains"]}
          correctAnswer="they contain else, conditions, and chains"
        />
        <Quiz 
          question="What is a break"
          answers={["where you exit out of a loop", "used to jump back to the beginning of a loop", "used temporarily when you are changing code", "will keep the code running indefinitely until a break"]}
          correctAnswer="where you exit out of a loop"
        />
        <Quiz 
          question="What is a While True"
          answers={["where you exit out of a loop", "used to jump back to the beginning of a loop", "used temporarily when you are changing code", "will keep the code running indefinitely until a break"]}
          correctAnswer="used to jump back to the beginning of a loop"
        />
        <Quiz 
          question="What is a pass"
          answers={["where you exit out of a loop", "used to jump back to the beginning of a loop", "used temporarily when you are changing code", "will keep the code running indefinitely until a break"]}
          correctAnswer="used temporarily when you are changing code"
        />
        <Quiz 
          question="What is a continue"
          answers={["where you exit out of a loop", "used to jump back to the beginning of a loop", "used temporarily when you are changing code", "will keep the code running indefinitely until a break"]}
          correctAnswer="will keep the code running indefinitely until a break"
        />
      </div>
    </section>
  )
}

export default page