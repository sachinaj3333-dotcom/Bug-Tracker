import React from 'react'
import Boardhead from '../../components/main page/Board/Boardhead';
import Boardfilter from '../../components/main page/Board/Boardfilter';
import Kanbanboard from '../../components/main page/Board/Kanbanboard';

const Board = () => {
  return (
    <>
    <div className="p-3 sticky-top" style={{backgroundColor: "#FAFBFE"}}>
        <Boardhead/>
    </div>
    <div className="p-3" style={{backgroundColor: "#FAFBFE"}}>
        <Boardfilter/>
        <Kanbanboard/>
    </div>
    </>
  )
}

export default Board;