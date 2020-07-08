import React, { useState, useEffect } from 'react';
import './App.css';
import {ComposedChart, Area, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Brush} from 'recharts';
import dataFile from './data.json'

export default function AmountsBTCChart(){
    const [data, setData] = useState([]);

    console.log(dataFile);

    useEffect(() => {
        setData(dataFile);
    },
    [])

    return(
        <ResponsiveContainer width="99%" height={550}>
        <ComposedChart width={1200} height={1800} data={data} margin={{top: 50, right: 20, bottom: 5, left: 20}} className="chart">
            <CartesianGrid stroke="#ccc" strokeDasharray="3 3"/>
            <XAxis dataKey="range" name="Range" />
            <YAxis yAxisId="left" label={{ value: 'Number of Addresses', position: 'left', angle: -90}} orientation="left" tick={{fontSize: 10}} scale="log" domain={['auto', 'auto']}/>
            <YAxis yAxisId="right" label={{ value: 'Proportion of Addresses', position: 'right', angle: 90}} orientation="right" tick={{fontSize: 10}} unit="%" scale="log" domain={['auto', 'auto']}/>
            <Tooltip />
            <Legend  verticalAlign="top"/>
            <Bar yAxisId="left" name="Number of Addresses" dataKey="no_addresses" fill="#2E8B57" />
            <Area type="monotoneX" yAxisId="right" dataKey="Proportion"  fill="#FFD700" stroke="#FFD700"/>
            <Brush tick={{fontSize: 10}} dataKey="range" />
        </ComposedChart>
        </ResponsiveContainer>
    );

}