import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const data = useLoaderData();
    console.log(data.data);
    return (
        <div>
            <h2 className='text-5xl font-medium my-8'>Quiz Content Analytics</h2>
            <hr className='w-1/2 mx-auto my-7' />
            <ResponsiveContainer width="80%" height={300} className='mx-auto'>
                <LineChart
                    width={500}
                    height={200}
                    data={data.data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
        </div >
    );
};

export default Statistics;