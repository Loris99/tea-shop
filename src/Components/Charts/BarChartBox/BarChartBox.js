
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { useState, useEffect } from 'react'
import React from 'react';


const BarChartBox = (props) => {

    // console.log("bar chart", props.ChartData)
    return (
        <ResponsiveContainer width="100%" height="100%">

            <BarChart
                width={400}
                height={400}
                data={props.ChartData}
            // margin={{
            //     top: 20,
            //     right: 10,
            //     left: 0,
            //     bottom: ,
            // }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={props.isDataKey} />
                <YAxis />
                <Tooltip />
                {/* <Legend /> */}

                <Bar stackId="a" dataKey="listofBlackTea_totalPrice" fill="#6666ff" />
                <Bar stackId="a" dataKey="listOfGreenTea_totalPrice" fill="#fff68f" />
                <Bar stackId="a" dataKey="listOfYellowTea_totalPrice" fill="#ff55a3" />
                <Bar stackId="a" dataKey="listOfWhiteTea_totalPrice" fill="#ff7373" />
            </BarChart>
        </ResponsiveContainer>

    )
}
export default BarChartBox;

