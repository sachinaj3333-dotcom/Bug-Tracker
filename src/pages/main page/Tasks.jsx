import React from 'react'
import Taskhead from '../../components/main page/Tasks/Taskhead.jsx';
import Taskvisits from '../../components/main page/Tasks/Taskvisits.jsx';

const Tasks = () => {
  return (
    <>
        <div className="p-3 sticky-top" style={{backgroundColor: "#FAFBFE"}}>
            <Taskhead/>
        </div>

        <div className="p-3" style={{backgroundColor: "#FAFBFE"}}>
            <Taskvisits/>
        </div>
    </>
  )
}

export default Tasks;