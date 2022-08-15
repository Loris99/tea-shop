import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react'
import React from 'react';


const LineChartBox = (props) => {
//linechart data
    return (
        <ResponsiveContainer width="100%" height="100%">

            <LineChart width={400} height={400} data={props.ChartData}
            >
                <XAxis dataKey={props.isDataKey} />
                <YAxis />
                <Line type="monotone" dataKey="listofBlackTea_totalPrice" stroke="#6666ff" />
                <Line type="monotone" dataKey="listOfGreenTea_totalPrice" stroke="#fff68f" />
                <Line type="monotone" dataKey="listOfYellowTea_totalPrice" stroke="#ff55a3" />
                <Line type="monotone" dataKey="listOfWhiteTea_totalPrice" stroke="#ff7373" />

                <CartesianGrid stroke="#ccc" />

            </LineChart>
        </ResponsiveContainer>
    )
}
export default LineChartBox;
