import React, { useState } from 'react';

const SelectAnswer = ({x,correctAnswer}) => {


     const[answer,setAnswer]=useState()
     const[checked,setChecked]=useState('')
  
   

    const handleClick=(x)=>{
        if(x===correctAnswer){
            setAnswer(true)
            
           
        }
        else{
            setAnswer(false)

        }

    }
  
    return (

        <>
             <label > 
             <input  type='checkbox'  onClick={()=>handleClick(x)}
             


        
        />{x}  </label>  

        {
        answer&&<p>Your answer is correct</p>
        }


       
        </>
       
    );
};

export default SelectAnswer;