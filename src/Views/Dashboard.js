import React from 'react';
import SimpleBarChart from '../Components/SimpleBarChart';
import SimplePieChart from '../Components/SimplePieChart';
import SimpleLineChart from '../Components/SimpleLineChart';
import TwoSimplePieChart from '../Components/TwoSimplePieChart';

function Dashboard(props) {
    return (
        <div>
            <h1 className="font-bold text-center text-2xl">My Dashboard</h1>
            <div class="grid grid-cols-8 gap-4">
                <div class="col-span-4"> <SimpleBarChart/></div>
                <div class="col-span-4"><TwoSimplePieChart/></div>
                <div class="col-span-3"><SimplePieChart/></div>
                <div class="col-span-5"><SimpleLineChart/></div>
            </div>
        </div>
    )
}

export default Dashboard;