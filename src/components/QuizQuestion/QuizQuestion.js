import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizQuestion = () => {
    const quizQuestion = useLoaderData();
    // console.log(quizQuestion);
    return (
        <div>
            <h2>this is from quixquestion</h2>
        </div>
    );
};

export default QuizQuestion;