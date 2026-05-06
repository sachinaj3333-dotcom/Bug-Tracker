import React from 'react'
import Styles from "../../../styles/main page components/Dashboard/Dashboardvisits.module.css";

const Dashboardvisits = () => {
    return (
        <>
            <div className={`row mt-1`}>
                <div className={`col-lg-2 ${Styles.main_col} `}>
                    <div className={`card ${Styles.visit_card}`}>
                        <div className={`row g-0`}>
                            <div className="col-6 pt-3">
                                <span className={`${Styles.project_logo}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-clipboard-check" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0" />
                                        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
                                        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
                                    </svg>
                                </span>
                            </div>
                            <div className="col-6">
                                <p className={`${Styles.numbers} mb-0`}>
                                    24
                                </p>
                                <p className={`${Styles.name} mb-1`}>Total Projects</p>
                                <p className={`${Styles.comparison} mb-0`}><span style={{ color: "green", fontWeight: "700" }}>+12%</span> <span>vs last month</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`col-lg-2 ${Styles.main_col} `}>
                    <div className={`card ${Styles.visit_card}`}>
                        <div className={`row g-0`}>
                            <div className="col-6 pt-3">
                                <span className={`${Styles.tasks_logo}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-list-task" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5zM3 3H2v1h1z" />
                                        <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z" />
                                        <path fill-rule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zM2 7h1v1H2zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm1 .5H2v1h1z" />
                                    </svg>
                                </span>
                            </div>
                            <div className="col-6">
                                <p className={`${Styles.numbers} mb-0`}>
                                    128
                                </p>
                                <p className={`${Styles.name} mb-1`}>Total Tasks</p>
                                <p className={`${Styles.comparison} mb-0`}><span style={{ color: "green", fontWeight: "700" }}>+8%</span> <span>vs last month</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`col-lg-2 ${Styles.main_col} `}>
                    <div className={`card ${Styles.visit_card}`}>
                        <div className={`row g-0`}>
                            <div className="col-6 pt-3">
                                <span className={`${Styles.progress_logo}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
                                    </svg>
                                </span>
                            </div>
                            <div className="col-6">
                                <p className={`${Styles.numbers} mb-0`}>
                                    76%
                                </p>
                                <p className={`${Styles.name} mb-1`}>Overall Progress</p>
                                <p className={`${Styles.comparison} mb-0`}><span style={{ color: "green", fontWeight: "700" }}>+6%</span> <span>vs last month</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`col-lg-2 ${Styles.main_col} `}>
                    <div className={`card ${Styles.visit_card}`}>
                        <div className={`row g-0`}>
                            <div className="col-6 pt-3">
                                <span className={`${Styles.team_member_logo}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
                                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                                    </svg>
                                </span>
                            </div>
                            <div className="col-6">
                                <p className={`${Styles.numbers} mb-0`}>
                                    12
                                </p>
                                <p className={`${Styles.name} mb-1`}>Team Members</p>
                                <p className={`${Styles.comparison} mb-0`}><span style={{ color: "green", fontWeight: "700" }}>+2</span> <span>vs last month</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`col-lg-2 ${Styles.main_col} `}>
                    <div className={`card ${Styles.visit_card}`}>
                        <div className={`row g-0`}>
                            <div className="col-6 pt-3">
                                <span className={`${Styles.logo}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-clipboard-check" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0" />
                                        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
                                        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
                                    </svg>
                                </span>
                            </div>
                            <div className="col-6">
                                <p className={`${Styles.numbers} mb-0`}>
                                    24
                                </p>
                                <p className={`${Styles.name} mb-1`}>Total Projects</p>
                                <p className={`${Styles.comparison} mb-0`}><span style={{ color: "green", fontWeight: "700" }}>+10%</span> <span>vs last month</span></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Dashboardvisits;