import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import Statistics from '../Statistics/Statistics';

const Home = () => {
    const quizs = useLoaderData().data;
    
    return (
        
       <div>
         <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" alt='' />
          <div>
            <h1 className="text-5xl font-bold">Try Your Puzzle Game!</h1>
            <p className="py-6">Improved Memory. Solving puzzles helps reinforce existing connections between our brain cells. ...</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
          
        </div>
        
      </div>
      <div className=' grid md:grid-cols-2 sm:grid-cols-1 gap-10'>
        
        {
            quizs.map(quiz =><Quiz key={quiz.id} quiz={quiz}></Quiz>)
        }
        
      </div>
     
       </div>
    );
};

export default Home;