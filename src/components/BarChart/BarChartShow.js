import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarChartShow = ({quiz}) => {
    const {total} = quiz
    return (
        <BarChart width={150} height={40} data={quiz}>
        <Bar dataKey="total" fill="#8884d8" />
      </BarChart>
    );
};

export default BarChartShow;