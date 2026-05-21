import React from 'react'
import Styles from "../../../styles/main page components/Dashboard/Dashboardhead.module.css";
import { Link } from 'react-router-dom';

const Dashboardhead = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-6">
                    <p className={`${Styles.page_name} mb-1`}>
                        Dashboard
                    </p>
                    <p className={`${Styles.page_intro} text-muted mb-0`}>
                        Welcome back, User! Here's what's happening with your projects.
                    </p>
                </div>
                <div className="col-lg-6 g-0 d-flex justify-content-end ">
                    <form role='search'>
                        <input type="search" placeholder='Search....' aria-label='search' className={`${Styles.search_input} form-control`} />
                    </form>
                    <span className=' pt-1' >
                        <span className={`${Styles.bell_icon}`}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
                        </svg></span>
                    </span>
                    <span>
                        <Link>
                            <button className={`${Styles.add_project_btn} me-2 `} data-bs-toggle="modal" data-bs-target="#addProjectid">+ New Project</button>
                        </Link>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Dashboardhead