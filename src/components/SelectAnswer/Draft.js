import React, { useState } from 'react';

const Draft = ({x,correctAnswer,id}) => {


     const[answer,setAnswer]=useState()
     const[checked,setChecked]=useState()
  
   

    const handleClick=(x)=>{
        if(x ===correctAnswer){
            setAnswer(true)
            
           
        }
        else{
            setAnswer(false)

        }

    }
  
    return (

        <div className='border-spacing-2 w-150 rounded bg-slate-300 '>
             <label className='' > 
             <input type="radio" id="html" name="fav_language" value="HTML"
              onClick={()=>handleClick(x)}
            />{x}  </label> 
           

        {
        answer ?<p>correct answer</p>: <p>worng answer</p>
            

        }
       
        </div>
       
    );
};

export default Draft;