import React, { useState } from 'react';
import SelectAnswer from '../SelectAnswer/SelectAnswer';
import { EyeIcon } from '@heroicons/react/24/solid'

const Question = ({qs}) => {

  //  console.log(qs)
  
    
    const{question,id,options, correctAnswer}= qs
    // console.log(correctAnswer)
   const[check,setCheck]= useState()
   const[answer,setAnswer]=useState(null)

   const handleCorrectAnsClick = (correctAnswer)=>{
    // console.log(correctAnswer)

   }
  

        const handleChange=(option)=>{

        setCheck(option)
        if(option ===correctAnswer){
          setAnswer(true)
   
      }
      else{
          setAnswer(false)

      }

        
 }

  let content=null;
  if(answer===null) content=''
  if(answer===false  ) content=<p>Swal.fire(
    'OPS!',
    'Your Answer is wrong!',
    'Try Again'
  )</p>
  if(answer===true  ) content=<p>Swal.fire(
    'Good job!',
    'Your Answer is correct!',
    'success'
  )</p>
 
 
    
    return (
        <div className=''>
          <div className=''>
          <div className='p-30'>
            <button onClick={()=>handleCorrectAnsClick()}>
            <EyeIcon className="h-6 w-6 text-blue-500 "/>
            </button>

          </div>

          <h1 className='font-bold'>{question}</h1>
          

          
         
{


options.map((option,index)=><SelectAnswer 

handleChange={handleChange}
key={index} option={option}  value={check}  answer={answer}  >

    


</SelectAnswer>)
}


{
    
      content   

      }  
          
          
         
         
          

      </div>
          
        </div>
    );
};

export default Question;