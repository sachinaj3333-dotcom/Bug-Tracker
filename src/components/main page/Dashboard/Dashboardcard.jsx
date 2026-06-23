import React from 'react'
import Styles from '../../../styles/main page components/Dashboard/Dashboardcard.module.css';
import { Link } from 'react-router-dom';
import { PieChart } from '@mui/x-charts';
import profile from "../../../assets/myimage.jpeg";

const Dashboardcard = () => {


    return (
        <>
            <div className="row mt-3">
                <div className="col-4">
                    <div className={`card p-3 ${Styles.main_card} `}>
                        <div className={`${Styles.head}`}>
                            <span className={`${Styles.card_name}`}>Recent Projects</span> <Link className={`${Styles.view_all}`}><span>View all</span></Link>
                        </div>
                        <div className={`${Styles.card_body} mt-3`}>
                            {
                                [0, 1, 2, 3].map((item) => (
                                    <div className={`row g-0  mb-2 ${Styles.card_content} mb-3`}>
                                        <div className="col-6">
                                            <p className={`${Styles.project_name} mb-0`}>Sanpbug Website</p>
                                            <p className={`${Styles.project_type} text-muted mb-0`}>Web Development</p>
                                        </div>
                                        <div className="col-6 d-inline-flex align-items-center">
                                            <progress value={45} max={100} className='w-75' /><span className={`ms-2 ${Styles.project_progress}`}>45%</span> <span className={`${Styles.project_opt} ms-2`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                            </svg></span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className={`card p-3 ${Styles.main_card} `}>
                        <div className={`${Styles.head}`}>
                            <span className={`${Styles.card_name}`}>Bug Summary</span> <Link className={`${Styles.view_all}`}><span>View all</span></Link>
                        </div>
                        <div className="mt-4">
                            <div className="row">
                                <PieChart
                                    colors={['#f44336', '#FDB83C', '#1E68FD', '#5EACFE']}
                                    series={[
                                        {
                                            data: [
                                                { id: 0, value: 8, label: 'Critical' },
                                                { id: 1, value: 14, label: 'High' },
                                                { id: 2, value: 12, label: 'Medium' },
                                                { id: 3, value: 6, label: 'Low' },
                                            ],
                                        },
                                    ]}
                                    width={200}
                                    height={247}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className={`card p-3 ${Styles.main_card} `}>
                        <div className={`${Styles.head}`}>
                            <span className={`${Styles.card_name}`}>Activity Feed</span> <Link className={`${Styles.view_all}`}><span>View all</span></Link>
                        </div>
                        <div className={`${Styles.card_body} mt-3 overflow-auto`}>
                            {
                                [0, 1, 2, 3].map((item) => (
                                    <div className={`row g-0  mb-2 ${Styles.card_content}`}>
                                        <div className="col-2">
                                            <img src={profile} alt="profile" height={40} width={40} className={`${Styles.profile_image}`}/>
                                        </div>
                                        <div className="col-8">
                                            <p className={`${Styles.name} mb-0`}>Sachin Negi <span className='text-muted'>created a new task</span></p>
                                            <p className={`${Styles.about_task} mb-0`}>Design system update</p>
                                        </div>
                                        <div className="col-2 d-inline-flex align-items-center justify-content-end">
                                            <span className={`${Styles.time} text-muted`}>2m ago</span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboardcard;