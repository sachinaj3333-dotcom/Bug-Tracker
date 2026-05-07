import React from 'react'
import Projecthead from '../../components/main page/Projects/Projecthead';
import Projectvisits from '../../components/main page/Projects/Projectvisits';
import Projectboard from '../../components/main page/Projects/Projectboard';

const Projects = () => {
    return (
        <>
            <div className="p-3 sticky-top" style={{ background: "#FAFBFE" }}>

                <Projecthead />
            </div>
            <div className='p-3' style={{ background: "#FAFBFE", height: "87vh" }}>
                <Projectvisits/>
                <Projectboard/>
            </div>
        </>
    )
}

export default Projects;