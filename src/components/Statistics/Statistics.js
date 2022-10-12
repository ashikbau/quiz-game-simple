import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BarChartShow from '../BarChart/BarChartShow';




const Statistics = () => {
   
    const quizs = useLoaderData().data;
   
    return (
        <div>
            {
                quizs.map(quiz=><BarChartShow key={quiz.id} quiz={quiz}></BarChartShow>)
            }
        </div>
       
            
        
    );
};

export default Statistics;