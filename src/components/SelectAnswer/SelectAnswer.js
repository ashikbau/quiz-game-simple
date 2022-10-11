import React, { useState } from 'react';



const SelectAnswer = ({option,handleChange,value,answer}) => {
   
   
  
    return (

       <div>
 <div className='border-spacing-2 w-150 rounded bg-slate-300 '>
        
            
        <label className='' > 
         <input type="checkbox" 
         checked={value===option}

         
         onChange={(e)=>handleChange(option)}
        
         
        /> {option} </label> 
        
        
        

         </div>
        
   
       </div>

    );
};

export default SelectAnswer;