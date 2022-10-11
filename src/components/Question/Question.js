import React, { useState } from 'react';
import SelectAnswer from '../SelectAnswer/SelectAnswer';
import { BeakerIcon } from '@heroicons/react/24/solid'

const Question = ({qs}) => {

   
  
    
    const{question,id,options, correctAnswer}= qs
   const[check,setCheck]= useState()
   const[answer,setAnswer]=useState(null)
  

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
  if(answer===false  ) content=<p>Worng Answer</p>
  if(answer===true  ) content=<p>Correct Answer</p>
 
 
    
    return (
        <div>
          <div className=''>
          <div>
            <button>Show Correct Answer</button>
            <BeakerIcon className="h-6 w-6 text-blue-500"/>

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