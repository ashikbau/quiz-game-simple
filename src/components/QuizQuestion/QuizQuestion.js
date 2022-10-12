import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const QuizQuestion = () => {
    const {questions} = useLoaderData().data;
   
    return (
        <div className=''>
            
            {
                questions.map(qs=> <Question 
                    key={qs.id}
                    qs={qs}
                
                
                ></Question>)
            }
        </div>
    );
};

export default QuizQuestion;