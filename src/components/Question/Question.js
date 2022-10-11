import React, { useState } from 'react';
import SelectAnswer from '../SelectAnswer/SelectAnswer';

const Question = ({qs}) => {

 
   const{question,id,options, correctAnswer}= qs
 
    
    return (
        <div>
            <h1 className='font-bold'>{question}</h1>

            {
               options.map(x=> <SelectAnswer 
                key={x.id} x={x} correctAnswer={correctAnswer}  ></SelectAnswer> ) 
            }
           

         
            
           
           
            

        </div>
    );
};

export default Question;