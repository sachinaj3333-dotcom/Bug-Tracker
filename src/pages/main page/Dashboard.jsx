import React, { useState } from 'react'
import Dashboardhead from '../../components/main page/Dashboard/Dashboardhead';
import Dashboardvisits from '../../components/main page/Dashboard/Dashboardvisits';
import Dahboardgraph from '../../components/main page/Dashboard/Dahboardgraph';
import Dashboardcard from '../../components/main page/Dashboard/Dashboardcard';
import Styles from "../../styles/main page components/Modal/Addprojectmodal.module.css";

const Dashboard = () => {

    const [selectedColor, setSelectedColor] = useState("");

    return (
        <>
            <div className="p-3 sticky-top" style={{ background: "#FAFBFE" }}>

                <Dashboardhead />
            </div>
            <div className='p-3' style={{ background: "#FAFBFE" }}>
                <Dashboardvisits />
                <Dahboardgraph />
                <Dashboardcard />
            </div>
            <div className="card">
                <div className="modal fade modal-xl" id="addProjectid" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="addProjectBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div className="row w-50 g-0">
                                    <div className="col-2 text-center align-content-center">
                                        <span className={`${Styles.addproject_icon}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-folder-plus me-3" viewBox="0 0 16 16">
                                            <path d="m.5 3 .04.87a2 2 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2m5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19q-.362.002-.683.12L1.5 2.98a1 1 0 0 1 1-.98z" />
                                            <path d="M13.5 9a.5.5 0 0 1 .5.5V11h1.5a.5.5 0 1 1 0 1H14v1.5a.5.5 0 1 1-1 0V12h-1.5a.5.5 0 0 1 0-1H13V9.5a.5.5 0 0 1 .5-.5" />
                                        </svg></span>
                                    </div>
                                    <div className="col-10 align-content-center">
                                        <h1 className={`modal-title fs-5 ${Styles.modal_name}`} id="addProjectBackdropLabel">Add New Project</h1>
                                        <p className={`${Styles.modal_description} text-muted mt-1`}>Create a new project to organize and track your work.</p>
                                    </div>
                                </div>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body p-0 overflow-hidden">
                                <div className="row">
                                    <div className="col-6" style={{ borderRight: "2px solid #ECEDFD" }}>
                                        <form className="row g-1 p-4">
                                            <div className="col-12">
                                                <label htmlFor="projectName" className={`form-label ${Styles.form_label}`} >Project Name</label>
                                                <input type="text" className={`form-control ${Styles.input_field}`} id="projectName" placeholder='Enter project name' />
                                                <div className="form-text">Choose a clear and descriptive name for your project.</div>
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="projectKey" className={`form-label ${Styles.form_label} mt-3`}>Project Key</label>
                                                <div className="input-group">
                                                    <span className={`input-group-text ${Styles.input_field}`} id="prekeyName">SBP</span>
                                                    <input type="text" className={`form-control ${Styles.input_field}`} id="projectKey" aria-describedby="prekeyName keydescription" placeholder='Enter short key' />
                                                </div>
                                                <div className="form-text" id="keydescription">Example help text goes outside the input group.</div>
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="projectDescription" className={`form-label ${Styles.form_label} mt-3`}>Description</label>
                                                <textarea name="" className={`form-control ${Styles.description_input}`} id="projectDescription" rows={3} placeholder='Enter project description (optional)'></textarea>
                                                <div className="form-text">Describe the purpose and goal of this project.</div>
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="projectIcon" className={`form-label ${Styles.form_label} mb-3 mt-3`}>Project Icon</label><br />

                                                {/* Make saperate id for all icons */}
                                                <span id='projectIcon' className={`${Styles.project_icon} me-3`}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-globe" viewBox="0 0 16 16">
                                                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                                                </svg></span>
                                                <span id='projectIcon' className={`${Styles.project_icon} me-3`}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pc-display" viewBox="0 0 16 16">
                                                    <path d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5M1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2z" />
                                                </svg></span>
                                                <span id='projectIcon' className={`${Styles.project_icon} me-3`}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
                                                    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                                    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                                                </svg></span>
                                                <span id='projectIcon' className={`${Styles.project_icon} me-3`}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                                                </svg></span>
                                                <span id='projectIcon' className={`${Styles.project_icon} me-3`}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-hdd-stack" viewBox="0 0 16 16">
                                                    <path d="M14 10a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1zM2 9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2z" />
                                                    <path d="M5 11.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M14 3a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
                                                    <path d="M5 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
                                                </svg></span>
                                                <span id='projectIcon' className={`${Styles.project_icon} me-3`}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
                                                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
                                                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
                                                </svg></span>
                                                <span id='projectIcon' className={`${Styles.project_icon} me-3`}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                                                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                                                </svg></span>
                                                <div className="form-text mt-4">Choose an icon that represents your project.</div>
                                            </div>
                                            <div className="col-12">

                                                {/* PROJECT COLOR SECTION */}


                                                <label className={`form-check-label ${Styles.form_label} mb-2 mt-3`} htmlFor="checkDefault">Project Color</label><br />

                                                <div style={{ display: "flex", gap: "25px" }} className='ms-2 '>

                                                    {/* Blue */}
                                                    <label
                                                        style={{
                                                            width: "25px",
                                                            height: "25px",
                                                            background: "#174AFB",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            borderRadius: "100%",
                                                            cursor: "pointer",
                                                            color: "white",
                                                            fontSize: "18px"
                                                        }}
                                                    >
                                                        <input
                                                            type="radio"
                                                            name="color"
                                                            value="#174AFB"
                                                            checked={selectedColor === "#174AFB"}
                                                            onChange={(e) => setSelectedColor(e.target.value)}
                                                            style={{ display: "none" }}
                                                        />

                                                        {selectedColor === "#174AFB" && "✓"}
                                                    </label>

                                                    {/* Purple */}
                                                    <label
                                                        style={{
                                                            width: "25px",
                                                            height: "25px",
                                                            background: "#7C4EF4",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            borderRadius: "100%",
                                                            cursor: "pointer",
                                                            color: "white",
                                                            fontSize: "18px"
                                                        }}
                                                    >
                                                        <input
                                                            type="radio"
                                                            name="color"
                                                            value="#7C4EF4"
                                                            checked={selectedColor === "#7C4EF4"}
                                                            onChange={(e) => setSelectedColor(e.target.value)}
                                                            style={{ display: "none" }}
                                                        />

                                                        {selectedColor === "#7C4EF4" && "✓"}
                                                    </label>

                                                    {/* Green */}
                                                    <label
                                                        style={{
                                                            width: "25px",
                                                            height: "25px",
                                                            background: "#20BA75",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            borderRadius: "100%",
                                                            cursor: "pointer",
                                                            color: "white",
                                                            fontSize: "18px"
                                                        }}
                                                    >
                                                        <input
                                                            type="radio"
                                                            name="color"
                                                            value="#20BA75"
                                                            checked={selectedColor === "#20BA75"}
                                                            onChange={(e) => setSelectedColor(e.target.value)}
                                                            style={{ display: "none" }}
                                                        />

                                                        {selectedColor === "#20BA75" && "✓"}
                                                    </label>

                                                    {/* Yellow */}
                                                    <label
                                                        style={{
                                                            width: "25px",
                                                            height: "25px",
                                                            background: "#FCA917",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            borderRadius: "100%",
                                                            cursor: "pointer",
                                                            color: "white",
                                                            fontSize: "18px"
                                                        }}
                                                    >
                                                        <input
                                                            type="radio"
                                                            name="color"
                                                            value="#FCA917"
                                                            checked={selectedColor === "#FCA917"}
                                                            onChange={(e) => setSelectedColor(e.target.value)}
                                                            style={{ display: "none" }}
                                                        />

                                                        {selectedColor === "#FCA917" && "✓"}
                                                    </label>

                                                    {/* Red */}
                                                    <label
                                                        style={{
                                                            width: "25px",
                                                            height: "25px",
                                                            background: "#F94045",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            borderRadius: "100%",
                                                            cursor: "pointer",
                                                            color: "white",
                                                            fontSize: "18px"
                                                        }}
                                                    >
                                                        <input
                                                            type="radio"
                                                            name="color"
                                                            value="#F94045"
                                                            checked={selectedColor === "#F94045"}
                                                            onChange={(e) => setSelectedColor(e.target.value)}
                                                            style={{ display: "none" }}
                                                        />

                                                        {selectedColor === "#F94045" && "✓"}
                                                    </label>

                                                    {/* Pink */}
                                                    <label
                                                        style={{
                                                            width: "25px",
                                                            height: "25px",
                                                            background: "#F74983",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            borderRadius: "100%",
                                                            cursor: "pointer",
                                                            color: "white",
                                                            fontSize: "18px"
                                                        }}
                                                    >
                                                        <input
                                                            type="radio"
                                                            name="color"
                                                            value="#F74983"
                                                            checked={selectedColor === "#F74983"}
                                                            onChange={(e) => setSelectedColor(e.target.value)}
                                                            style={{ display: "none" }}
                                                        />

                                                        {selectedColor === "#F74983" && "✓"}
                                                    </label>
                                                    {/* blue two */}
                                                    <label
                                                        style={{
                                                            width: "25px",
                                                            height: "25px",
                                                            background: "#139FCA",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            borderRadius: "100%",
                                                            cursor: "pointer",
                                                            color: "white",
                                                            fontSize: "18px"
                                                        }}
                                                    >
                                                        <input
                                                            type="radio"
                                                            name="color"
                                                            value="#139FCA"
                                                            checked={selectedColor === "#139FCA"}
                                                            onChange={(e) => setSelectedColor(e.target.value)}
                                                            style={{ display: "none" }}
                                                        />

                                                        {selectedColor === "#139FCA" && "✓"}
                                                    </label>

                                                    {/* Gray */}
                                                    <label
                                                        style={{
                                                            width: "25px",
                                                            height: "25px",
                                                            background: "#8F98AB",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            borderRadius: "100%",
                                                            cursor: "pointer",
                                                            color: "white",
                                                            fontSize: "18px"
                                                        }}
                                                    >
                                                        <input
                                                            type="radio"
                                                            name="color"
                                                            value="#8F98AB"
                                                            checked={selectedColor === "#8F98AB"}
                                                            onChange={(e) => setSelectedColor(e.target.value)}
                                                            style={{ display: "none" }}
                                                        />

                                                        {selectedColor === "#8F98AB" && "✓"}
                                                    </label>
                                                </div>
                                                <div className="form-text mt-2">Select a color to identify your project across the app.</div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-6" style={{ backgroundColor: "#FAFAFC", overflow: "auto" }}>
                                        <form className="row g-4 p-4">
                                            <div className="col-12">
                                                <label htmlFor="projectType" className={`${Styles.form_label} mb-3`}>Project Type</label>
                                                <div className={`dropdown  ${Styles.dropdown} bg-white`} id='projectType'>
                                                    <div className={`dropdown-toggle ${Styles.dropdown_toggle} overflow-hidden p-1`} data-bs-toggle="dropdown" aria-expanded="false">
                                                        Choose the type that best describes your project.
                                                    </div>
                                                    <ul className={`dropdown-menu ${Styles.dropdown_menu} w-100`}>
                                                        <li className={`dropdown-item ${Styles.dropdown_item}`}>
                                                            <div className="row">
                                                                <div className="col-1 align-content-center"><i className={`bi bi-globe ${Styles.icon}`}></i></div>
                                                                <div className="col-11">
                                                                    <span className={`${Styles.project_type}`}>Web Application</span><br />
                                                                    <span className={`${Styles.type_description} text-muted`}>Frontend & backend</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className={`dropdown-item ${Styles.dropdown_item}`}>
                                                            <div className="row">
                                                                <div className="col-1 align-content-center"><i className={`bi bi-phone ${Styles.icon}`}></i></div>
                                                                <div className="col-11">
                                                                    <span className={`${Styles.project_type}`}>Mobile Application</span><br />
                                                                    <span className={`${Styles.type_description} text-muted`}>IOS & Android apps</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className={`dropdown-item ${Styles.dropdown_item}`}>
                                                            <div className="row">
                                                                <div className="col-1 align-content-center"><i className={`bi bi-bug ${Styles.icon}`}></i></div>
                                                                <div className="col-11">
                                                                    <span className={`${Styles.project_type}`}>Bug Tracking</span><br />
                                                                    <span className={`${Styles.type_description} text-muted`}>Track & manage bugs</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className={`dropdown-item ${Styles.dropdown_item}`}>
                                                            <div className="row">
                                                                <div className="col-1 align-content-center"><i className={`bi bi-cloud ${Styles.icon}`}></i></div>
                                                                <div className="col-11">
                                                                    <span className={`${Styles.project_type}`}>API / Backend</span><br />
                                                                    <span className={`${Styles.type_description} text-muted`}>REST APIs & services</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className={`dropdown-item ${Styles.dropdown_item}`}>
                                                            <div className="row">
                                                                <div className="col-1 align-content-center"><i className={`bi bi-pencil ${Styles.icon}`}></i></div>
                                                                <div className="col-11">
                                                                    <span className={`${Styles.project_type}`}>Design Project</span><br />
                                                                    <span className={`${Styles.type_description} text-muted`}>UI/UX and design work</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className={`dropdown-item ${Styles.dropdown_item}`}>
                                                            <div className="row">
                                                                <div className="col-1 align-content-center"><i className={`bi bi-megaphone ${Styles.icon}`}></i></div>
                                                                <div className="col-11">
                                                                    <span className={`${Styles.project_type}`}>Marketing Project</span><br />
                                                                    <span className={`${Styles.type_description} text-muted`}>Campaigns & activities</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className={`dropdown-item ${Styles.dropdown_item}`}>
                                                            <div className="row">
                                                                <div className="col-1 align-content-center"><i className={`bi bi-bar-chart ${Styles.icon}`}></i></div>
                                                                <div className="col-11">
                                                                    <span className={`${Styles.project_type}`}>Data / Analytics</span><br />
                                                                    <span className={`${Styles.type_description} text-muted`}>Data insights & reports</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className={`dropdown-item ${Styles.dropdown_item}`}>
                                                            <div className="row">
                                                                <div className="col-1 align-content-center"><i className={`bi bi-hdd-stack ${Styles.icon}`}></i></div>
                                                                <div className="col-11">
                                                                    <span className={`${Styles.project_type}`}>DevOps / Infra</span><br />
                                                                    <span className={`${Styles.type_description} text-muted`}>Infrastructure & tools</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className={`dropdown-item ${Styles.dropdown_item}`}>
                                                            <div className="row">
                                                                <div className="col-1 align-content-center"><i className={`bi bi-three-dots ${Styles.icon}`}></i></div>
                                                                <div className="col-11">
                                                                    <span className={`${Styles.project_type}`}>Other</span><br />
                                                                    <span className={`${Styles.type_description} text-muted`}>Custom project type</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <label className={`${Styles.form_label} mb-3`}>Project Preview</label>
                                                <div className={`card ${Styles.project_preview_card}`}>
                                                    <div className="row p-3">
                                                        <div className="col-2 text-start align-content-center">
                                                            <span className={`${Styles.project_preview_icon}`}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-globe" viewBox="0 0 16 16">
                                                                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                                                            </svg></span>
                                                        </div>
                                                        <div className="col-10">
                                                            <span className={`${Styles.project_name_demo}`}>Project Name</span><br />
                                                            <span className={`${Styles.project_key_demo} `}>SBP-001</span>
                                                        </div>
                                                    </div>
                                                    <div className="form-text mt-3 ms-3 mb-3">Project description will appear here. This is how your project will look.</div>
                                                    <div className="card-footer bg-white" style={{ borderTop: "2px solid #E6EDFD" }}>
                                                        <div className="row p-3">
                                                            <div className="col-4">
                                                                <div className="row">
                                                                    <div className="col-2 align-content-center">
                                                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-clipboard2-check" viewBox="0 0 16 16">
                                                                            <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5z" />
                                                                            <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z" />
                                                                            <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z" />
                                                                        </svg></span>
                                                                    </div>
                                                                    <div className="col-10">
                                                                        <span className={`ms-3 ${Styles.demo_options} fw-bold`}>0</span><br />
                                                                        <span className={`${Styles.demo_options} ms-3 text-muted`}>Tasks</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-4">
                                                                <div className="row">
                                                                    <div className="col-2 align-content-center">
                                                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-bug" viewBox="0 0 16 16">
                                                                            <path d="M4.355.522a.5.5 0 0 1 .623.333l.291.956A5 5 0 0 1 8 1c1.007 0 1.946.298 2.731.811l.29-.956a.5.5 0 1 1 .957.29l-.41 1.352A5 5 0 0 1 13 6h.5a.5.5 0 0 0 .5-.5V5a.5.5 0 0 1 1 0v.5A1.5 1.5 0 0 1 13.5 7H13v1h1.5a.5.5 0 0 1 0 1H13v1h.5a1.5 1.5 0 0 1 1.5 1.5v.5a.5.5 0 1 1-1 0v-.5a.5.5 0 0 0-.5-.5H13a5 5 0 0 1-10 0h-.5a.5.5 0 0 0-.5.5v.5a.5.5 0 1 1-1 0v-.5A1.5 1.5 0 0 1 2.5 10H3V9H1.5a.5.5 0 0 1 0-1H3V7h-.5A1.5 1.5 0 0 1 1 5.5V5a.5.5 0 0 1 1 0v.5a.5.5 0 0 0 .5.5H3c0-1.364.547-2.601 1.432-3.503l-.41-1.352a.5.5 0 0 1 .333-.623M4 7v4a4 4 0 0 0 3.5 3.97V7zm4.5 0v7.97A4 4 0 0 0 12 11V7zM12 6a4 4 0 0 0-1.334-2.982A3.98 3.98 0 0 0 8 2a3.98 3.98 0 0 0-2.667 1.018A4 4 0 0 0 4 6z" />
                                                                        </svg></span>
                                                                    </div>
                                                                    <div className="col-10">
                                                                        <span className={`ms-3 ${Styles.demo_options} fw-bold`}>0</span><br />
                                                                        <span className={`${Styles.demo_options} ms-3 text-muted`}>Bugs</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-4">
                                                                <div className="row">
                                                                    <div className="col-2 align-content-center">
                                                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                                                                            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                                                                        </svg></span>
                                                                    </div>
                                                                    <div className="col-10">
                                                                        <span className={`ms-3 ${Styles.demo_options} fw-bold`}>0</span><br />
                                                                        <span className={`${Styles.demo_options} ms-3 text-muted`}>Members</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="projectPrivacy" className={`${Styles.form_label} mb-3`}>Privacy</label>
                                                <div className={`dropdown  ${Styles.dropdown} bg-white`} id='projectPrivacy'>
                                                    <div className={`dropdown-toggle ${Styles.dropdown_toggle_second} overflow-hidden p-1`} data-bs-toggle="dropdown" aria-expanded="false">
                                                        Choose who can view and access the project.
                                                    </div>
                                                    <ul className={`dropdown-menu ${Styles.dropdown_menu} w-100`}>
                                                        <li className={`dropdown-item ${Styles.dropdown_item}`}>
                                                            <div className="row">
                                                                <div className="col-1 align-content-center"><i className={`bi bi-lock ${Styles.icon}`}></i></div>
                                                                <div className="col-11">
                                                                    <span className={`${Styles.privacy_type}`}>Private</span><br />
                                                                    <span className={`${Styles.type_description} text-muted`}>Only members can view and access this project.</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className={`dropdown-item ${Styles.dropdown_item}`}>
                                                            <div className="row">
                                                                <div className="col-1 align-content-center"><i className={`bi bi-people ${Styles.icon}`}></i></div>
                                                                <div className="col-11">
                                                                    <span className={`${Styles.privacy_type}`}>Team</span><br />
                                                                    <span className={`${Styles.type_description} text-muted`}>All team members can view this project.</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className={`dropdown-item ${Styles.dropdown_item}`}>
                                                            <div className="row">
                                                                <div className="col-1 align-content-center"><i className={`bi bi-building ${Styles.icon}`}></i></div>
                                                                <div className="col-11">
                                                                    <span className={`${Styles.privacy_type}`}>Organization</span><br />
                                                                    <span className={`${Styles.type_description} text-muted`}>All members in your organization can view this project.</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className={`dropdown-item ${Styles.dropdown_item}`}>
                                                            <div className="row">
                                                                <div className="col-1 align-content-center"><i className={`bi bi-globe2 ${Styles.icon}`}></i></div>
                                                                <div className="col-11">
                                                                    <span className={`${Styles.privacy_type}`}>Public</span><br />
                                                                    <span className={`${Styles.type_description} text-muted`}>Anyone with the link can view this project.</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <label htmlFor="members" className={`${Styles.form_label} mb-3`}>Members</label>
                                                <div className={`dropdown  ${Styles.dropdown} bg-white`} id='memberrs'>
                                                    <div className={`dropdown-toggle ${Styles.dropdown_toggle_third} overflow-hidden p-1`} data-bs-toggle="dropdown" aria-expanded="false">
                                                        Add members by name or email...
                                                    </div>
                                                    <ul className={`dropdown-menu ${Styles.dropdown_menu} w-100`}>
                                                        <li><a className="dropdown-item" href="#"><i className="bi bi-lock"></i>Action</a></li>
                                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                    </ul>
                                                </div>
                                                <div className="form-text mt-2">You can add more members after creating the project.</div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className={`btn ${Styles.cancel_btn}`} data-bs-dismiss="modal">Cancel</button>
                                <button type="button" className={`btn ${Styles.create_project_btn}`}>+ Create Project</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;