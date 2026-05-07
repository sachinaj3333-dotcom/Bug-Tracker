import React from 'react'
import Styles from "../../../styles/main page components/Projects/Projectvisits.module.css";

const Projectvisits = () => {
    return (
        <>
            <div className={`row mt-1`}>
                <div className={`col-lg-3 ${Styles.main_col} `}>
                    <div className={`card ${Styles.project_visit_card}`}>
                        <div className={`row g-0`}>
                            <div className="col-5 pt-3">
                                <span className={`${Styles.project_logo}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-folder2-open" viewBox="0 0 16 16">
                                        <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7z" />
                                    </svg>
                                </span>
                            </div>
                            <div className="col-7">
                                <p className={`${Styles.numbers} mb-0`}>
                                    24
                                </p>
                                <p className={`${Styles.name} mb-1`}>Total Projects</p>
                                <p className={`${Styles.comparison} mb-0`}><span style={{ color: "green", fontWeight: "700" }}>+12%</span> <span>vs last month</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`col-lg-3 ${Styles.main_col} `}>
                    <div className={`card ${Styles.project_visit_card}`}>
                        <div className={`row g-0`}>
                            <div className="col-5 pt-3">
                                <span className={`${Styles.project_completed_logo}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
                                    </svg>
                                </span>
                            </div>
                            <div className="col-7">
                                <p className={`${Styles.numbers} mb-0`}>
                                    8
                                </p>
                                <p className={`${Styles.name} mb-1`}>Completed</p>
                                <p className={`${Styles.comparison} mb-0`}><span style={{ color: "green", fontWeight: "700" }}>+25%</span> <span>vs last month</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`col-lg-3 ${Styles.main_col} `}>
                    <div className={`card ${Styles.project_visit_card}`}>
                        <div className={`row g-0`}>
                            <div className="col-5 pt-3">
                                <span className={`${Styles.in_progress_logo}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
                                        <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9" />
                                        <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z" />
                                    </svg>
                                </span>
                            </div>
                            <div className="col-7">
                                <p className={`${Styles.numbers} mb-0`}>
                                    76%
                                </p>
                                <p className={`${Styles.name} mb-1`}>In Progress</p>
                                <p className={`${Styles.comparison} mb-0`}><span style={{ color: "green", fontWeight: "700" }}>+8%</span> <span>vs last month</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`col-lg-3 ${Styles.main_col} `}>
                    <div className={`card ${Styles.project_visit_card}`}>
                        <div className={`row g-0`}>
                            <div className="col-5 pt-3">
                                <span className={`${Styles.on_hold_logo}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-pause-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                        <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0z" />
                                    </svg>
                                </span>
                            </div>
                            <div className="col-7">
                                <p className={`${Styles.numbers} mb-0`}>
                                    12
                                </p>
                                <p className={`${Styles.name} mb-1`}>On Hold</p>
                                <p className={`${Styles.comparison} mb-0`}><span style={{ color: "green", fontWeight: "700" }}>-5%</span> <span>vs last month</span></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Projectvisits;