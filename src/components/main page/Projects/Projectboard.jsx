import React from 'react'
import Styles from "../../../styles/main page components/Projects/Projectboard.module.css";
import image from "../../../assets/myimage.jpeg"

const Projectboard = () => {
    return (
        <>
            <div className="row g-0 mt-3">
                <div className="col">
                    <div className={`card py-1 ${Styles.board_card}`}>
                        <table className={`table border-0 m-0 ${Styles.board_table}`}>
                            <thead>
                                <tr>
                                    <th scope="col">Project</th>
                                    <th scope="col">Key</th>
                                    <th scope="col">Owner</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Progress</th>
                                    <th scope="col">Tasks</th>
                                    <th scope="col">Updated</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row"><span className={`${Styles.project_name}`}>Snapbug Website</span><br />
                                        <span className={`${Styles.project_short_description} text-muted`}>Marketing Website Redesign</span>
                                    </th>
                                    <td className='align-content-center'><span className={`text-muted ${Styles.key_name}`}>SBW-001</span></td>
                                    <td className='align-content-center'><span><img src={image} alt="profile" height={40} width={40} className={`${Styles.image}`} /></span></td>
                                    <td className='align-content-center'><span className={`${Styles.status}`}>In Progress</span></td>
                                    <td className='align-content-center'>
                                        <div className="progress w-75" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar text-bg-primary" style={{ width: "76%" }}>76%</div>
                                        </div>
                                    </td>
                                    <td className='align-content-center'><span className={`${Styles.tasks} text-muted`}>28/36</span></td>
                                    <td className='align-content-center'><span className={`${Styles.time} text-muted`}>2h ago</span></td>
                                    <td className='align-content-center'><span className={`${Styles.action}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                        </svg>
                                    </span></td>
                                </tr>
                                <tr>
                                    <th scope="row"><span className={`${Styles.project_name}`}>Snapbug Website</span><br />
                                        <span className={`${Styles.project_short_description} text-muted`}>Marketing Website Redesign</span>
                                    </th>
                                    <td className='align-content-center'><span className={`text-muted ${Styles.key_name}`}>SBW-001</span></td>
                                    <td className='align-content-center'><span><img src={image} alt="profile" height={40} width={40} className={`${Styles.image}`} /></span></td>
                                    <td className='align-content-center'><span className={`${Styles.status}`}>In Progress</span></td>
                                    <td className='align-content-center'>
                                        <div className="progress w-75" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar text-bg-primary" style={{ width: "76%" }}>76%</div>
                                        </div>
                                    </td>
                                    <td className='align-content-center'><span className={`${Styles.tasks} text-muted`}>28/36</span></td>
                                    <td className='align-content-center'><span className={`${Styles.time} text-muted`}>2h ago</span></td>
                                    <td className='align-content-center'><span className={`${Styles.action}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                        </svg>
                                    </span></td>
                                </tr>
                                <tr>
                                    <th scope="row"><span className={`${Styles.project_name}`}>Snapbug Website</span><br />
                                        <span className={`${Styles.project_short_description} text-muted`}>Marketing Website Redesign</span>
                                    </th>
                                    <td className='align-content-center'><span className={`text-muted ${Styles.key_name}`}>SBW-001</span></td>
                                    <td className='align-content-center'><span><img src={image} alt="profile" height={40} width={40} className={`${Styles.image}`} /></span></td>
                                    <td className='align-content-center'><span className={`${Styles.status}`}>In Progress</span></td>
                                    <td className='align-content-center'>
                                        <div className="progress w-75" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar text-bg-primary" style={{ width: "76%" }}>76%</div>
                                        </div>
                                    </td>
                                    <td className='align-content-center'><span className={`${Styles.tasks} text-muted`}>28/36</span></td>
                                    <td className='align-content-center'><span className={`${Styles.time} text-muted`}>2h ago</span></td>
                                    <td className='align-content-center'><span className={`${Styles.action}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                        </svg>
                                    </span></td>
                                </tr>
                                <tr>
                                    <th scope="row"><span className={`${Styles.project_name}`}>Snapbug Website</span><br />
                                        <span className={`${Styles.project_short_description} text-muted`}>Marketing Website Redesign</span>
                                    </th>
                                    <td className='align-content-center'><span className={`text-muted ${Styles.key_name}`}>SBW-001</span></td>
                                    <td className='align-content-center'><span><img src={image} alt="profile" height={40} width={40} className={`${Styles.image}`} /></span></td>
                                    <td className='align-content-center'><span className={`${Styles.status}`}>In Progress</span></td>
                                    <td className='align-content-center'>
                                        <div className="progress w-75" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar text-bg-primary" style={{ width: "76%" }}>76%</div>
                                        </div>
                                    </td>
                                    <td className='align-content-center'><span className={`${Styles.tasks} text-muted`}>28/36</span></td>
                                    <td className='align-content-center'><span className={`${Styles.time} text-muted`}>2h ago</span></td>
                                    <td className='align-content-center'><span className={`${Styles.action}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                        </svg>
                                    </span></td>
                                </tr>
                                <tr>
                                    <th scope="row"><span className={`${Styles.project_name}`}>Snapbug Website</span><br />
                                        <span className={`${Styles.project_short_description} text-muted`}>Marketing Website Redesign</span>
                                    </th>
                                    <td className='align-content-center'><span className={`text-muted ${Styles.key_name}`}>SBW-001</span></td>
                                    <td className='align-content-center'><span><img src={image} alt="profile" height={40} width={40} className={`${Styles.image}`} /></span></td>
                                    <td className='align-content-center'><span className={`${Styles.status}`}>In Progress</span></td>
                                    <td className='align-content-center'>
                                        <div className="progress w-75" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar text-bg-primary" style={{ width: "76%" }}>76%</div>
                                        </div>
                                    </td>
                                    <td className='align-content-center'><span className={`${Styles.tasks} text-muted`}>28/36</span></td>
                                    <td className='align-content-center'><span className={`${Styles.time} text-muted`}>2h ago</span></td>
                                    <td className='align-content-center'><span className={`${Styles.action}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                        </svg>
                                    </span></td>
                                </tr>
                                <tr>
                                    <td className='align-content-center'><span className={`text-muted ${Styles.pagination_detail}`}>showing 1 to 5 of 24 projects</span></td>
                                    <td className='align-content-center' colSpan={5}></td>
                                    <td className='align-content-center'>
                                        <nav aria-label="Page navigation example">
                                            <ul class="pagination">
                                                <li class="page-item">
                                                    <a class="page-link" href="#" aria-label="Previous">
                                                        <span aria-hidden="true">&laquo;</span>
                                                    </a>
                                                </li>
                                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                                <li class="page-item">
                                                    <a class="page-link" href="#" aria-label="Next">
                                                        <span aria-hidden="true">&raquo;</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projectboard;