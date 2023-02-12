
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import React from 'react';

const AreaChartBox = (props) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart
                width={400}
                height={400}
                data={props.ChartData}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={props.isDataKey} />
                <YAxis />
                <Tooltip />

                <Area type="monotone" dataKey="listofBlackTea_totalItems" stackId="1" stroke="#6666ff" fill="#6666ff" />
                <Area type="monotone" dataKey="listOfGreenTea_totalItems" stackId="1" stroke="#fff68f" fill="#fff68f" />
                <Area type="monotone" dataKey="listOfYellowTea_totalItems" stackId="1" stroke="#ff55a3" fill="#ff55a3" />
                <Area type="monotone" dataKey="listOfWhiteTea_totalItems" stackId="1" stroke="#ff7373" fill="#ff7373" />
            </AreaChart>
        </ResponsiveContainer>

    )
}
export default AreaChartBox;


