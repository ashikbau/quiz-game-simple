import React, { useState } from 'react';
import SelectAnswer from '../SelectAnswer/SelectAnswer';
import { EyeIcon } from '@heroicons/react/24/solid'

const Question = ({qs}) => {

  //  console.log(qs)
  
    
    const{question,id,options, correctAnswer}= qs
    // console.log(correctAnswer)
   const[check,setCheck]= useState()
   const[answer,setAnswer]=useState(null)
   const [rightAnswer, setRightAnswer] = useState('')

   const handleCorrectAnsClick = (correctAnswer)=>{
 
    setRightAnswer(correctAnswer)

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
  if(answer===false  ) content= alert('Your Answer is false')
  if(answer===true  ) content= alert('Your answer is correct')

  
  let element='';
  if(rightAnswer=== '') element =''
  
  if(rightAnswer) element= <h1>{correctAnswer}</h1>


 
 
    
    return (
        <div className=''>
          <div className=''>
          <div className='p-30'>
            <button onClick={()=>handleCorrectAnsClick(correctAnswer)}>
            <EyeIcon className="h-6 w-6 text-blue-500 "/>
            </button>
            {element}

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