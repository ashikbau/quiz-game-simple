import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const quizs = useLoaderData().data;
    
    
    return (
        <div>
           
           <LineChart width={400} height={300} data={quizs}>
           <Line type="monotone" dataKey="total" stroke="#82ca9d" />
           <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
           </LineChart>
          
            
        </div>
    );
};

export default Statistics;