
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { useState, useEffect } from 'react'
import React from 'react';


const BarChartBox = (props) => {

    return (
        <ResponsiveContainer width="100%" height="100%">

            <BarChart
                width={400}
                height={400}
                data={props.ChartData}
         
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={props.isDataKey} />
                <YAxis />
                <Tooltip />
                <Bar stackId="a" dataKey="listofBlackTea_totalPrice" fill="#6666ff" />
                <Bar stackId="a" dataKey="listOfGreenTea_totalPrice" fill="#fff68f" />
                <Bar stackId="a" dataKey="listOfYellowTea_totalPrice" fill="#ff55a3" />
                <Bar stackId="a" dataKey="listOfWhiteTea_totalPrice" fill="#ff7373" />
            </BarChart>
        </ResponsiveContainer>

    )
}
export default BarChartBox;

