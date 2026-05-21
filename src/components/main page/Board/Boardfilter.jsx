import React from 'react'
import Styles from "../../../styles/main page components/Board/Boardfilter.module.css";

const Boardfilter = () => {
    return (
        <>
            <div className="row">
                <div className="row">
                    <div className="col-lg-6 d-inline-flex gap-3">
                        <div className="dropdown">
                            <button className={`btn dropdown-toggle ${Styles.dropdown_btn}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-globe me-2" viewBox="0 0 16 16">
                                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                                </svg></span>Snapbug Website
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <div className={`${Styles.status} d-flex`}>
                            <div className={` ps-3 pe-2 ${Styles.status_name} align-content-center`} style={{ backgroundColor: "#FAFBFE" }}>
                                Status
                            </div>
                            <div className={`d-flex align-items-center ps-3 pe-2 gap-2  ${Styles.status_color}`} style={{ backgroundColor: "white" }}>
                                <div className={`${Styles.todo_task}`}></div>
                                <div className={`${Styles.inprogress_task}`}></div>
                                <div className={`${Styles.inreview_task}`}></div>
                                <div className={`${Styles.done_task}`}></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 g-0 d-flex justify-content-end gap-3">
                        <div className={`btn-group bg-white px-2 ${Styles.status_btn}`} style={{borderColor: "rgba(128, 128, 128, 0.242)"}}>
                            <button className={`btn btn-sm ${Styles.btn_name}`} type="button">
                                Group by:
                            </button>
                            <button type="button" className={`btn btn-sm dropdown-toggle dropdown-toggle-split ${Styles.btn_work}`} data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="visually-hidden">Toggle Dropdown</span> Status
                            </button>
                            <ul className="dropdown-menu">
                                ...
                            </ul>
                        </div>
                        <div className={`btn-group bg-white px-2 ${Styles.priority_btn}`} style={{borderColor: "rgba(128, 128, 128, 0.242)"}}>
                            <button className={`btn btn-sm ${Styles.btn_name}`} type="button">
                                Sort by:
                            </button>
                            <button type="button" className={`btn btn-sm dropdown-toggle dropdown-toggle-split ${Styles.btn_work}`} data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="visually-hidden">Toggle Dropdown</span> Priority
                            </button>
                            <ul className="dropdown-menu">
                                ...
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Boardfilter;