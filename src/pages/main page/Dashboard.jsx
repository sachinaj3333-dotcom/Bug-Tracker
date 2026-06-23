import React, { useState } from 'react'
import Dashboardhead from '../../components/main page/Dashboard/Dashboardhead';
import Dashboardvisits from '../../components/main page/Dashboard/Dashboardvisits';
import Dahboardgraph from '../../components/main page/Dashboard/Dahboardgraph';
import Dashboardcard from '../../components/main page/Dashboard/Dashboardcard';
import Styles from "../../styles/main page components/Modal/Addprojectmodal.module.css";
import addProjectHelper from '../../helper/project/add-project-helper.js';

const Dashboard = () => {

    const { handleChange, handleSubmit, errors, formValue, projects, projectStore, projectPrivacy, handlePrivacy, projectType, handleType, selectedColor, setSelectedColor, selectedIcon, setSelectedIcon, handleCircleClr, handleClickIcon, icons, colors, privacy, projectTypeTemp } = addProjectHelper();

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
                            <form onSubmit={handleSubmit}>
                                <div className="modal-body p-0 overflow-hidden">
                                    <div className="row">
                                        <div className="col-6" style={{ borderRight: "2px solid #ECEDFD" }}>
                                            <div className="row g-1 p-4">
                                                <div className="col-12">
                                                    <label htmlFor="projectName" className={`form-label ${Styles.form_label}`} >Project Name</label>
                                                    <input type="text" className={`form-control ${Styles.input_field}`} onChange={handleChange} value={formValue.projectName} name='projectName' id="projectName" placeholder='Enter project name' />
                                                    <div className="form-text">Choose a clear and descriptive name for your project.</div>
                                                    {errors.projectName && (
                                                        <span className='text-danger'>{errors.projectName}</span>
                                                    )}
                                                </div>
                                                <div className="col-12">
                                                    <label htmlFor="projectKey" className={`form-label ${Styles.form_label} mt-3`}>Project Key</label>
                                                    <div className="input-group">
                                                        <span className={`input-group-text ${Styles.input_field}`} id="prekeyName">SBP</span>
                                                        <input type="text" className={`form-control ${Styles.input_field}`} onChange={handleChange} value={formValue.projectKey} name='projectKey' id="projectKey" aria-describedby="prekeyName keydescription" placeholder='Enter short key' />
                                                    </div>
                                                    <div className="form-text" id="keydescription">Example help text goes outside the input group.</div>
                                                    {errors.projectKey && (
                                                        <span className="text-danger">{errors.projectKey}</span>
                                                    )}
                                                </div>
                                                <div className="col-12">
                                                    <label htmlFor="projectDescription" className={`form-label ${Styles.form_label} mt-3`}>Description</label>
                                                    <textarea name="" className={`form-control ${Styles.description_input}`} onChange={handleChange} value={formValue.projectDescription} name='projectDescription' id="projectDescription" rows={3} placeholder='Enter project description (optional)'></textarea>
                                                    <div className="form-text">Describe the purpose and goal of this project.</div>
                                                    {errors.projectDescription && (
                                                        <span className='text-danger'>{errors.projectDescription}</span>
                                                    )}
                                                </div>
                                                <div className="col-12">
                                                    <label htmlFor="projectIcon" className={`form-label ${Styles.form_label} mb-3 mt-3`}>Project Icon</label><br />

                                                    {/* Make saperate id for all icons */}
                                                    {icons.slice(0, 6).map((picon) => (
                                                        <span id='projectIcon' className={`${Styles.project_icon} me-2 text-center align-content-center`} onClick={() => { handleClickIcon(picon.id) }} key={picon.id}
                                                            style={{ backgroundColor: selectedIcon?.id === picon.id ? selectedColor.bgColor : "" }}
                                                        ><i style={{
                                                            color: selectedIcon?.id === picon.id ? selectedColor.color : "",
                                                        }} className={`${picon.iconClass}`}></i></span>
                                                    ))}
                                                    <span className='dropup'>

                                                        <span id='projectIcon' className={`${Styles.project_icon} text-center align-content-center`} data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots"></i></span>
                                                        <div className={`dropdown-menu ${Styles.icon_dropupmenu} pt-4 px-3`}>
                                                            {icons.slice(7).map((picon) => (
                                                                <span id='projectIcon' style={{backgroundColor: selectedIcon?.id === picon.id ? selectedColor.bgColor : ""}} className={`${Styles.project_icon} me-2 d-inline-block mb-3 text-center align-content-center`} onClick={() => { handleClickIcon(picon.id) }} key={picon.id}><i style={{
                                                                    color: selectedIcon?.id === picon.id ? selectedColor.color : "",
                                                                }} className={`${picon.iconClass}`}></i></span>
                                                            ))}
                                                        </div>
                                                    </span>

                                                    <div className="form-text mt-4">Choose an icon that represents your project.</div>
                                                </div>
                                                <div className="col-12">

                                                    {/* PROJECT COLOR SECTION */}


                                                    <label className={`form-check-label ${Styles.form_label} mb-2 mt-3`} htmlFor="checkDefault">Project Color</label><br />

                                                    <div style={{ display: "flex", gap: "25px" }} className='ms-2 '>
                                                        {colors.map((circle, index) => (
                                                            <label key={index}
                                                                style={{
                                                                    width: "25px",
                                                                    height: "25px",
                                                                    background: circle.colorCode,
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
                                                                    value={circle.colorCode}
                                                                    checked={selectedColor === circle.colorCode}
                                                                    onChange={() => handleCircleClr(circle.colorCode, circle.backgroundColorCode)}
                                                                    style={{ display: "none" }}
                                                                />

                                                                {selectedColor.color === circle.colorCode && "✓"}
                                                                {/* {selectedColor.bgColor === circle.backgroundColorCode} */}
                                                            </label>
                                                        ))}


                                                    </div>
                                                    <div className="form-text mt-2">Select a color to identify your project across the app.</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6" style={{ backgroundColor: "#FAFAFC", overflow: "auto" }}>
                                            <div className="row g-4 p-4">
                                                <div className="col-12">
                                                    <label htmlFor="projectType" className={`${Styles.form_label} mb-3`}>Project Type</label>
                                                    <div className={`dropdown  ${Styles.dropdown} bg-white`} id='projectType'>
                                                        <div className={`dropdown-toggle ${Styles.dropdown_toggle} overflow-hidden p-1`} data-bs-toggle="dropdown" aria-expanded="false">
                                                            {projectType?.name || "Choose the type that best describes your project."}
                                                        </div>
                                                        <ul className={`dropdown-menu ${Styles.dropdown_menu} w-100`}>
                                                            {projectTypeTemp.map((type) => (
                                                                <li className={`dropdown-item ${Styles.dropdown_item}`} key={type.id} onClick={() => handleType(type)}>
                                                                    <div className="row">
                                                                        <div className="col-1 align-content-center"><i className={`${type.iconClass} ${Styles.icon}`}></i></div>
                                                                        <div className="col-11">
                                                                            <span className={`${Styles.project_type}`}>{type.name}</span><br />
                                                                            <span className={`${Styles.type_description} text-muted`}>{type.description}</span>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            ))}
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
                                                            {projectPrivacy?.name || "Choose who can view and access the project."}
                                                        </div>
                                                        {errors.projectPrivacy && (
                                                            <span className="text-danger">{errors.projectPrivacy}</span>
                                                        )}
                                                        <ul className={`dropdown-menu ${Styles.dropdown_menu} w-100`}>
                                                            {/* map li  */}
                                                            {privacy.map((privacy) => (
                                                                <li className={`dropdown-item ${Styles.dropdown_item}`} key={privacy.id} onClick={() => handlePrivacy(privacy)}>
                                                                    <div className="row">
                                                                        <div className="col-1 align-content-center"><i className={`${privacy.iconClass} ${Styles.icon}`}></i></div>
                                                                        <div className="col-11">
                                                                            <span className={`${Styles.privacy_type}`}>{privacy.name}</span><br />
                                                                            <span className={`${Styles.type_description} text-muted`}>{privacy.description}</span>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            ))}

                                                        </ul>
                                                    </div>
                                                    {errors.projectPrivacy && (
                                                        <span className='text-danger'>{errors.projectPrivacy}</span>
                                                    )}
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className={`btn ${Styles.cancel_btn}`} data-bs-dismiss="modal">Cancel</button>
                                    <button type="submit" className={`btn ${Styles.create_project_btn}`}>+ Create Project</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;