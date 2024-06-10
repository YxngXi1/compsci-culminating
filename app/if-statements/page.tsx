import React from 'react'
import Image from 'next/image'
import Quiz from '@/components/Quiz'



const page = () => {
  return (
    <section>
      <div className='flex my-20 flex-col h-full items-center justify-center text-center'>
        <h1 className='mb-4 '>If Statements</h1>
        <Image 
          src='/images/if-statements.png'
          width={1000}
          height={500}
          alt='if-statements'
        / >
        <div className=' flex  justify-center items-center text-center gap-8 mx-8 my-12'>
        <p className='w-full flex justify-center items-center h-full text-base'>
          An if statement is basically changing the program based off of whether something is true or false. They always include a condition, and it will always return a boolean value which is either "True" or "False". INDENTATION IS REQUIRED FOR THE PROGRAM TO UNDERSTAND THAT YOUR CODE IS WITHIN THE IF STATEMENT. There are multiple conditions you can use, but some of the most common ones are  == is it equal, &gt;= is it greater than or equal to, &gt; is it greater than, &lt;= is it less than or equal to, &lt; is it less than, != is it NOT equal to. However, if the statement is false, then you will need an else statement right under to be able to indicate what will happen if it is false. You can also put chains of if statements together, using the elif. It will go from top to bottom, and if one if statement doesn’t work, then it will move down to the next one, and so on until reaching the else statement. Furthermore, you can also chain together different conditions like "and" and "or". &apos;And&apos; makes sure both conditions are true, and &apos;or&apos; checks if either one of them are true.  Essentially for &apos;and&apos;, if both are true, it will go into that branch, if only one is true and there is an &apos;or&apos; statement, it will also pass through to that branch. Furthermore, you can also group chains together by using brackets around the statements. See below for examples of the code! Another important concept in if statements is a nested if statement, essentially it is an if statement within an if statement. Nested if statements are important if you would like to branch off even more from the original branch. For example, in the scenario above, if one of the characters is an underscore it will then go on to another if statement, to be able to identify which ones to identify as correct, incorrect, and just being in the wrong place. Nested if statements make code more compact, easier to read, and are able to communicate ideas more effectively. In the program shown above the first command is seeing if it is true that there is not an underscore, if not then it will add a blank space. As you can see, the != not equal to works in a way to check for an underscore being there or not, if there isn’t one, it means that there is a letter there, and so it will run the if statement that is NESTED within.
        </p>
        </div>
      </div>
      <div>
        <Quiz 
          question="What is an if statements?"
          answers={["It runs a function, usually repeated code", "If it is true, it will change the program and lead it down a different path, otherwise if it’s false it will go down a different path again.", "it will print a value", "it will iterate through a list multiple times"]}
          correctAnswer="If it is true, it will change the program and lead it down a different path, otherwise if it’s false it will go down a different path again."
        />
        <Quiz 
          question="Which of the following is not a condition that you can use for if statements?"
          answers={["==", "=", "!=", ">=", ">", "<", "<="]}
          correctAnswer="="
        />
        <Quiz 
          question="What is an elif?"
          answers={["A nested branch", "It is essentially an if statement that will be run through after the if statement is false", "the final possibility", "a debugging part"]}
          correctAnswer="It is essentially an if statement that will be run through after the if statement is false"
        />
        <Quiz 
          question="What does a chain of if, elif, and else statements look like in the order they will be run through?"
          answers={["if/elif/elif/elif/elif/elif/else", "elif/if/elif/elif/elif/elif/else", "else/if/elif/elif/elif/elif/elif/else", "if/elif/elif/elif/elif/elif"]}
          correctAnswer="if/elif/elif/elif/elif/elif/else"
        />
        <Quiz 
          question="What is not a condition?"
          answers={["and", "or", "other"]}
          correctAnswer="other"
        />
        <Quiz 
          question="Which one will check if both conditions are true?"
          answers={["and", "or"]}
          correctAnswer="and"
        />
        <Quiz 
          question="Which one will check if only on condition is correct?"
          answers={["and", "or"]}
          correctAnswer="or"
        />
        <Quiz 
          question="How do you group chains together?"
          answers={["just use order of operations", "using brackets", "add them together using +"]}
          correctAnswer="How do you group chains together?"
        />
      </div>
    </section>
  )
}

export default page