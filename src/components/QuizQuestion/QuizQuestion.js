import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const QuizQuestion = () => {
    const {questions} = useLoaderData().data;
   
    return (
        <div>
            <h2>this is from quixquestion</h2>
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