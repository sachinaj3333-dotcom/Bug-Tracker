import React from 'react'
import Styles from "../../../styles/main page components/Board/Kanbanboard.module.css";

const Kanbanboard = () => {
    return (
        <>
            <div className="row mt-5">
                <div className="col-lg-3">
                    <div className="card">
                        <div className="card-head">
                            <div className="row p-2">
                                <div className="col-6 d-flex align-items-center gap-2">
                                    <div className={`${Styles.status_todo_color}`}></div>
                                    <span>To Do</span>
                                </div>
                                <div className="col-6 d-flex justify-content-end gap-2">
                                    <span className={`${Styles.add_btn}`}>+</span>
                                    
                                    <span className={`${Styles.action_btn}`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                                    </svg></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3"></div>
                <div className="col-lg-3"></div>
                <div className="col-lg-3"></div>
            </div>
        </>
    )
}

export default Kanbanboard;