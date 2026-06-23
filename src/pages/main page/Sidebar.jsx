import React from 'react'
import Styles from "../../styles/main page components/Sidebar.module.css";
import { Link, useParams } from 'react-router-dom';
import profileimage from "../../assets/profile.webp";
import { patch } from '@mui/material';
import { decodeToken } from '../../utils/tokenUtil.js';

const Sidebar = ({ activeTab, setActiveTab }) => {

    const menuItems = [
        {
            id: "dashboard", label: "Dashboard", icon: "bi bi-house", path: "/dashboard"
        },
        {
            id: "project", label: "Projects", icon: "bi bi-folder2", path: "/projects"
        },
        {
            id: "tasks", label: "Tasks", icon: "bi bi-check-square", path: "/tasks"
        },
        {
            id: "board", label: "Board", icon: "bi bi-kanban", path: "/board"
        },
    ];

    const currentUser = decodeToken();

    return (
        <aside className={`${Styles.sidebar} d-flex flex-column`}>
            <p className={`${Styles.app_name}`}>Snapbug</p>
            <ul className={`${Styles.sidebar_menu_list}`}>

                {
                    menuItems.map((item) => (
                        <div key={item.id}>

                            <Link to={item.path}>
                                <li className={` mx-3 p-0 mb-3`} onClick={() => setActiveTab(item.path)}>

                                    <button className={` btn w-100 text-start ${Styles.menuname} ${activeTab === item.path ? Styles.menuitem : ""}`}>
                                        <span><i className={item.icon}></i></span>
                                        <span className='ms-2'>{item.label}</span>
                                    </button>
                                </li>
                            </Link>
                        </div>
                    ))
                }
            </ul>
            <div className={`${Styles.profile} mt-auto mb-5`}>
                <div className="row m-0">
                    <div className="col-4 text-center">
                        <img src={profileimage} alt="image" height={50} width={50} style={{ borderRadius: "100%" }} />
                    </div>
                    <div className="col-8 p-0 align-items-center">
                        <div className={`${Styles.user_info}`}>
                            <div className={`dropup ${Styles.dropup}`}>
                                <div className={`dropdown-toggle ${Styles.toggle_btn}`} data-bs-toggle="dropdown" aria-expanded="false">
                                    <p className={`${Styles.user_name} mb-0`}>{currentUser.name.split(" ")[0]}</p>
                                    <p className={`${Styles.user_email} mb-0 text-muted`}>{currentUser.email}</p>
                                </div>
                                <ul className="dropdown-menu p-2">
                                    <li className={`${Styles.dropup_item}`}>
                                        <i className="bi bi-person me-2 fs-6"></i><span>My Profile</span>
                                    </li>
                                    <li className={`${Styles.dropup_item}`}>
                                        <i className="bi bi-gear me-2 fs-6"></i><span>Account Setting</span>
                                    </li>
                                    <li className={`${Styles.dropup_item}`}>
                                        <i className="bi bi-question-circle me-2 fs-6"></i><span>Help & Support</span>
                                    </li>
                                    <li className={`${Styles.logout}`}>
                                        <i className="bi bi-box-arrow-right me-2 fs-6"></i><span>Logout</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar;