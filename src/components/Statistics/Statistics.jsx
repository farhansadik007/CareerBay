import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './Statistics.css';

const Statistics = () => {

    const data = [
        {
            name: 'A1',
            highest: 60,
            mark: 29
        },
        {
            name: 'A2',
            highest: 60,
            mark: 29
        },
        {
            name: 'A3',
            highest: 60,
            mark: 37
        },
        {
            name: 'A4',
            highest: 60,
            mark: 47
        },
        {
            name: 'A5',
            highest: 60,
            mark: 48
        },
        {
            name: 'A6',
            highest: 60,
            mark: 33
        },
        {
            name: 'A7',
            highest: 60,
            mark: 50
        },
    ];

    return (
        <div className='chart'>
            <h1>Assignment Marks:</h1>
                <AreaChart
                    width={1200}
                    height={600}
                    data={data}
                    margin={{
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis dataKey="highest"/>
                    <Tooltip />
                    <Area type="monotone" dataKey="mark" stroke="#0084d0" fill="#0094d0" />
                </AreaChart>
        </div>
    );
};

export default Statistics;