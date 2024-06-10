import React from 'react'
import Image from 'next/image'
import Quiz from '@/components/Quiz'



const page = () => {
  return (
    <section>
      <div className='flex my-20 flex-col h-full items-center justify-center text-center'>
        <h1 className='mb-4 '>Variables</h1>
        <Image 
          src='/images/variables.png'
          width={500}
          height={300}
          alt='variables'
        / >
        <div className=' flex flex-col justify-center items-center text-center gap-8 mx-8 my-12'>
            <h2>Types of Variables</h2>
            <p className=' w-full  flex justify-center items-center h-full text-base'>
              Variables are ways to temporarily store information and can be manipulated using a variety of methods. Naming a variable, as stated previously in documentation is extremely important to be able to tell what it is doing, and to tell what the value it holds is. There are 2 naming conventions for variables as stated previously including camelCase and pot_hole_case. Variables have many different types such as integers (whole number), floats (decimal number), strings (text), boolean values (a true or false, 0 or 1), etc. A constant is a variable cannot be changed and no matter who or what you input when running the program. In the case shown above, resultList is an instance of a constant.
            </p>
            <h2>Conditions</h2>
            <p className=' w-full  flex justify-center items-center h-full text-base'>
            A fun thing you can do with variables is to be able to isolate certain parts of it, in particular with strings. For example, you can use variableName.islower() to check if the entire string is lowercase. There are many others like that, but in python it also includes count() and len(), where len returns the amount of characters that are in a string and count can be used to count how many times a certain character, word or phrase is used in a string, or any variable such as a list. In the above code, you can see this being used to be able to isolate each word in the fileContent apart. In python the interepreator will figure out what kind of vrialbe you chose is, and so you don’t need to assign it yourself. To be able to print a variable you need to use a  + str(variable) to be able to print it out.
               Otherwise you can create an f string by doing print(f”and then adding a variable like so: {'{variable}'}”). 
               
            </p>
           <h2>Math</h2>
           <p className=' w-full  flex justify-center items-center h-full text-base'>To adjust these variables you can use math, the most common of them being +, -, *, /, //, %, and **. // is used when you do math and it will ignore all values afte the decimal place. % will find the remainder of a division, and ** with be the same at to the power of. NOTE YOU CANNOT DO MATH WITH STRINGS. You can also convert between data types through function such as int(), float(), and str(). They will each convert whatever variable you place inside to be integer, float, and string respectively. The most important and often utilization of a variable is when you put a [variable = input(“question goes here”)]. This will store the user input in the variable, so that you are able to access it later. The variable will always originally be a string, but can be converted to an integer if need be through the functions given above. Variables are also able to store lists and dictionaries.</p>
               
            <h2>Lists & Dictionaries</h2>
            <p className=' w-full  flex justify-center items-center h-full text-base'> The basics of what a list is multiple values in 1 variable, and the y are usually separated in comments and look like [a = [value1, value2, value3, value4]. On the other hand, dictionaries will have a key and value that goes along with the key and looks like this: [Dictionary = [“key” : “value”, “key2” : “value2”, etc.]].  The code outlined above we created a list of all of the words that are 5 letters long using the word.txt, and importing it into a variable. We also have an example of a string and integer where we have attemptsLeft being 6, and userGuess being a string!</p>
        </div>
      </div>
      <div>
        <Quiz 
          question="What are variables used for?"
          answers={["printing information", "running a function", "Temporarily storing information", "Looking pretty"]}
          correctAnswer="Temporarily storing information"
        />
        <Quiz 
          question="What are the two naming conventions for variables?"
          answers={["pot_hole_case and camelCase", "camelCase", "pot_hole_case", "CAPITALS"]}
          correctAnswer="pot_hole_case and camelCase"
        />
        <Quiz 
          question="What is a variable constant?"
          answers={["A variable that is often used in a program", "Something that is defined and isn’t changed again", "code that is recycled throughout the program", "a part of code that doesn't change throughout the programming experience"]}
          correctAnswer="Something that is defined and isn’t changed again"
        />
        <Quiz 
          question="Which of the following is an incorrect way of checking a string quickly for a true or false?"
          answers={[".islower()", "islower()", ".islower"]}
          correctAnswer=".islower()"
        />
        <Quiz 
          question="What are all of the main types of variables?"
          answers={["integers, floats, boolean", "strings, numbers, boolean", "integers, floats, booleans, strings", "binary, strings, integers, floats"]}
          correctAnswer="integers, floats, booleans, strings"
        />
        <Quiz 
          question="Which of the following contains something that is not a mathmatetical operation?"
          answers={["+", "-", "/", "//", "%", "**", "*/"]}
          correctAnswer="*/"
        />
        <Quiz 
          question="What is something you can NEVER do using strings?"
          answers={["apply a .islower()", "do math, using mathematical operations", "change between math and string"]}
          correctAnswer="do math, using mathematical operations"
        />
        <Quiz 
          question="Which of the following is not an example of how you convert data types?"
          answers={["int()", "str()", "float()", "bool()"]}
          correctAnswer="bool()"
        />
        <Quiz 
          question="Which of the following code correctly assigns the variable a user input?"
          answers={["variable = input(“question goes here”)", "input(“question goes here”)", "variable = (“question goes here”)"]}
          correctAnswer="variable = input(“question goes here”)"
        />
        <Quiz 
          question="Which of the following code is not the correct one for either a list or dictionary"
          answers={[
            'a = [value1, value2, value3, value4]',
            'Dictionay = [“key” : “value”, “key2” : “value2”, etc.]',
            'a = "value1", "value2", "value3"'
          ]}
          correctAnswer='a = "value1", "value2", "value3"'
        />
      </div>
    </section>
  )
}

export default page