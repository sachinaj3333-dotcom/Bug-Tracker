import React from 'react'
import Styles from "../../../styles/main page components/Tasks/Taskvisits.module.css";

const Taskvisits = () => {
    return (
        <>
            <div className={`row mt-1`}>
                <div className={`col-lg-2 ${Styles.main_col} `}>
                    <div className={`card ${Styles.visit_card}`}>
                        <div className={`row g-0`}>
                            <div className="col-6 pt-3">
                                <span className={`${Styles.task_logo}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-clipboard2-minus" viewBox="0 0 16 16">
                                        <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5z" />
                                        <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z" />
                                        <path d="M6 8a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z" />
                                    </svg>
                                </span>
                            </div>
                            <div className="col-6">
                                <p className={`${Styles.numbers} mb-0`}>
                                    128
                                </p>
                                <p className={`${Styles.name} mb-1`}>Total Tasks</p>
                                <p className={`${Styles.comparison} mb-0`}><span style={{ color: "green", fontWeight: "700" }}>+12%</span> <span>vs last month</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`col-lg-2 ${Styles.main_col} `}>
                    <div className={`card ${Styles.visit_card}`}>
                        <div className={`row g-0`}>
                            <div className="col-6 pt-3">
                                <span className={`${Styles.todo_logo}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
                                    </svg>
                                </span>
                            </div>
                            <div className="col-6">
                                <p className={`${Styles.numbers} mb-0`}>
                                    32
                                </p>
                                <p className={`${Styles.name} mb-1`}>To Do</p>
                                <p className={`${Styles.comparison} mb-0`}><span style={{ color: "green", fontWeight: "700" }}>+8%</span> <span>vs last month</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`col-lg-2 ${Styles.main_col} `}>
                    <div className={`card ${Styles.visit_card}`}>
                        <div className={`row g-0`}>
                            <div className="col-6 pt-3">
                                <span className={`${Styles.inprogress_logo}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-repeat" viewBox="0 0 16 16">
                                        <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9" />
                                        <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z" />
                                    </svg>
                                </span>
                            </div>
                            <div className="col-6">
                                <p className={`${Styles.numbers} mb-0`}>
                                    42
                                </p>
                                <p className={`${Styles.name} mb-1`}>In Progress</p>
                                <p className={`${Styles.comparison} mb-0`}><span style={{ color: "green", fontWeight: "700" }}>+5%</span> <span>vs last month</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`col-lg-2 ${Styles.main_col} `}>
                    <div className={`card ${Styles.visit_card}`}>
                        <div className={`row g-0`}>
                            <div className="col-6 pt-3">
                                <span className={`${Styles.in_review_logo}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-hourglass" viewBox="0 0 16 16">
                                        <path d="M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5m2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702c0 .7-.478 1.235-1.011 1.491A3.5 3.5 0 0 0 4.5 13v1h7v-1a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351v-.702c0-.7.478-1.235 1.011-1.491A3.5 3.5 0 0 0 11.5 3V2z" />
                                    </svg>
                                </span>
                            </div>
                            <div className="col-6">
                                <p className={`${Styles.numbers} mb-0`}>
                                    15
                                </p>
                                <p className={`${Styles.name} mb-1`}>In Review</p>
                                <p className={`${Styles.comparison} mb-0`}><span style={{ color: "red", fontWeight: "700" }}>-10%</span> <span>vs last month</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`col-lg-2 ${Styles.main_col} `}>
                    <div className={`card ${Styles.visit_card}`}>
                        <div className={`row g-0`}>
                            <div className="col-6 pt-3">
                                <span className={`${Styles.complete_logo}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
                                    </svg>
                                </span>
                            </div>
                            <div className="col-6">
                                <p className={`${Styles.numbers} mb-0`}>
                                    39
                                </p>
                                <p className={`${Styles.name} mb-1`}>Completed</p>
                                <p className={`${Styles.comparison} mb-0`}><span style={{ color: "green", fontWeight: "700" }}>+15%</span> <span>vs last month</span></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Taskvisits;