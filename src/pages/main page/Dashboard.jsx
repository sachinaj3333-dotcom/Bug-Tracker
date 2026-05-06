import React from 'react'
import Dashboardhead from '../../components/main page/Dashboard/Dashboardhead';
import Dashboardvisits from '../../components/main page/Dashboard/Dashboardvisits';
import Dahboardgraph from '../../components/main page/Dashboard/Dahboardgraph';
import Dashboardcard from '../../components/main page/Dashboard/Dashboardcard';

const Dashboard = () => {
    return (
        <>
            <div className="p-3 sticky-top" style={{ background: "#FAFBFE"}}>

                <Dashboardhead />
            </div>
            <div className='p-3' style={{ background: "#FAFBFE" }}>
                <Dashboardvisits />
                <Dahboardgraph />
                <Dashboardcard/>
            </div>
        </>
    )
}

export default Dashboard;