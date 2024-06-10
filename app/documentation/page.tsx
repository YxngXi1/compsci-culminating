import React from 'react'
import Image from 'next/image'
import Quiz from '@/components/Quiz'



const page = () => {
  return (
    <section>
      <div className='flex  flex-col h-screen items-center justify-center text-center'>
        <h1 className='mb-4 '>Documentation</h1>
        <Image 
          src='/images/documentation.png'
          width={1000}
          height={500}
          alt='documentation'
        / >
        <div className=' flex  justify-center items-center text-center gap-8 mx-8 my-12'>
            <h1 className=' w-2/12 '>what is documentation used for?</h1>
            <p className=' w-10/12  flex justify-center items-center h-full text-xs'>Code documentation is where software programmers document their code. This will usually result in better code in terms of readability, reproducibility, and reproduction by others who try to use your code. One of the most common methods of doing so is through the use of comments. Comments are used to be able to explain code to other people, and a README.md file is also often used to explain how to deploy a project locally. To be able to have truly clean code you need to have good variables that are descriptive enough to help people using your code know what it is for. You also need to have comments in multiple areas to explain what a block of code may do. The variable names used in this section play a large role in the program as they will often be called upon, and with a good name, it was easy for me to differentiate it from different variables, allowing others to be able to read it easier and for me to work more efficiently. The comments in this code are used to be able to show what the code is doing, in the case showed on the left below the “CODES:” are values that are later used within the code during the debugging and coding phases, and the legend helped us remember what each value would mean when we were testing. This played a major role throughout the development as Sohum and I had to communicate ideas and functions across code, and with a legend as shown, it helped me to understand the code better. Furthermore, when debugging and printing a certain variable, these values will be displayed, allowing people who use the code to understand what the issue may be. Headers are an alternative to a README.md and in this case it will be the one to provide the description of the file and what its purpose is along with the author of the file.

In the example shown above, I used it to be able to give the title of the project, and other details that were not possible as a result of not having a README.md. Note that the entire header is commented out to  make sure it does not become interpreted as code, and is indicated as multiple lines in a row being commented out, often having hyphens both below and above the header details. 

Comments are meant to be short and concise and fully describe the purpose of that block of code. I have already described the use of my comments in the code block shown above, but comments can also be easily identified by a # before the text (ONLY IN PYTHON). Without the #, writing normally will result in the program misinterpreting what you write as code, and may attempt to run it. The # tells the computer to skip over it.

I have already detailed the importance of the naming for your variable names, but there are also two types of variables known as camelCase and pot_hole_case. In the code demonstrated above, camelCase is used. Words are combined but you can tell the difference by the capitalization of letters. For pot_hole_case case you have an underscore to separate words. The variable checkGuess, is a good example of camelCase and being descriptive without being too long. It will literally run a function that will check the guess of the user and return whether or not it is correct or not, literally checking the guess.
</p>
        </div>
      </div>
      <div>
        <Quiz 
          question="Why is documentation important for both the individuals coding and others who view the code."
          answers={["It's where people document their code", "It allows people to read the code easily", "It makes it easier to edit by other parties", "It helps with readability, reproducibility, and reproduction."]}
          correctAnswer="It helps with readability, reproducibility, and reproduction."
        />
        <Quiz 
          question="Following up on the previous question, what are some methods in which individual coding can help improve the code’s documentation?"
          answers={["To increase communication within the code", "Making the code bigger", "Creating multiple indents, and gaps between every line of code", "By including a README.md, using good variable names, creating a descriptive header, and commenting on the functions and how each block of code works."]}
          correctAnswer="By including a README.md, using good variable names, creating a descriptive header, and commenting on the functions and how each block of code works."
        />
        <Quiz 
          question="Why is variable naming so important?"
          answers={["Makes the code look cooler", "To prevent misccomunications with names and to make sure that they are not mixed up with other variables.", "Improves the vibe you get from the code", "Helps to improve the chances of mixing it up"]}
          correctAnswer="To prevent misccomunications with names and to make sure that they are not mixed up with other variables."
        />
        <Quiz 
          question="What are the 2 main ways comments enhance your code?"
          answers={["improves code efficiency", "makes it look nicer.", "They allow for communication among your partner and it can help others to be able to understand your code effectively."]}
          correctAnswer="They allow for communication among your partner and it can help others to be able to understand your code effectively."
        />
        <Quiz 
          question="Why is a good README.md or header important for your code?"
          answers={["Makes it look professional", "Improves efficency", "So that others are able to replicate your code, see when it was created, and to be able to give credit to its true author (you!).", "Act as a function"]}
          correctAnswer="So that others are able to replicate your code, see when it was created, and to be able to give credit to its true author (you!)."
        />
        <Quiz 
          question="How do you create a comment in python?"
          answers={["$", "/", "*/", "#"]}
          correctAnswer="#"
        />
        <Quiz 
          question="What are the two types of variable naming?"
          answers={["pot_hole_case and capital_case", "pot_hole_case and camelCase", ".lower and capital_case"]}
          correctAnswer="pot_hole_case and camelCase"
        />
        <Quiz 
          question="Which of the following is an example of pot_hole_case"
          answers={["variableName", "variablename", "VARIABLENAME", "variable_name"]}
          correctAnswer="variable_name"
        />
      </div>
    </section>
  )
}

export default page