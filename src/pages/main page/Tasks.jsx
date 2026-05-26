import React, { useEffect, useRef, useState } from 'react'
import Taskhead from '../../components/main page/Tasks/Taskhead.jsx';
import Taskvisits from '../../components/main page/Tasks/Taskvisits.jsx';
import Taskboard from '../../components/main page/Tasks/Taskboard.jsx';
import Styles from "../../styles/main page components/Modal/Addtaskmodal.module.css";
import { ChevronDown, Plus, Search, X } from 'lucide-react';
import profile from "../../assets/myimage.jpeg"

const Tasks = () => {

  const allLabels = [
    {
      id: 1,
      name: "Ui/Ux",
      color: "#2563EB",
    },
    {
      id: 2,
      name: "Design",
      color: "#9333EA",
    },
    {
      id: 3,
      name: "Website",
      color: "#16A34A",
    },
    {
      id: 4,
      name: "Frontend",
      color: "#F59E0B"
    },
    {
      id: 5,
      name: "Backend",
      color: "#EF4444",
    },
    {
      id: 6,
      name: "API",
      color: "#06B6D4",
    },
    {
      id: 7,
      name: "Bug",
      color: "#DC2626",
    },
    {
      id: 8,
      name: "Enhancement",
      color: "#EA580C",
    },
    {
      id: 9,
      name: "Document ",
      color: "#4F46E5",
    },
  ];

  const randomColors = [
    "#2563EB",
    "#9333EA",
    "#16A34A",
    "#F59E0B",
    "#EF4444",
    "#06B6D4",
    "#EA580C",
    "#4F46E5",
  ]

  const [labels, setLabels] = useState(allLabels);

  const [selectedLabels, setSelectedLabels] =
    useState([
      allLabels[0],
      allLabels[1],
      allLabels[2],
    ]);

  const [search, setSearch] = useState("");

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef();

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        dropdownRef.current && !dropdownRef.current.contains(e.target)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }), [];

  // Check selected
  const isSelected = (label) => {
    return selectedLabels.find(
      (item) => item.id === label.id
    );
  };

  // Toggle label 
  const toggleLabel = (label) => {
    if (isSelected(label)) {
      setSelectedLabels(
        selectedLabels.filter(
          (item) => item.id !== label.id
        )
      );
    } else {
      setSelectedLabels([
        ...selectedLabels,
        label,
      ]);
    }
  };

  // Remove label

  const removeLabel = (id) => {
    setSelectedLabels(
      selectedLabels.filter(
        (item) => item.id !== id
      )
    );
  };

  // Create new label
  const createNewLabel = () => {
    if (!search.trim()) return;

    // Check duplicate
    const alreadyExists = labels.find(
      (label) => label.name.toLowerCase() === search.toLowerCase()
    );
    if (alreadyExists) {
      toggleLabel(alreadyExists);
      return;
    }

    const newLabel = {
      id: Date.now(),
      name: search,
      color: randomColors[Math.floor(Math.random() * randomColors.length)],
    };

    // Add to label list
    setLabels([...labels, newLabel]);

    // Auto select new label

    setSelectedLabels([...selectedLabels, newLabel]);

    // Clear input
    setSearch("")
  }

  // Filter labels

  const filteredLabels = allLabels.filter(
    (label) => label.name.toLowerCase().includes(search.toLowerCase())
  );



  // Style (css for label drowpdown)

  const labelDropdownSelectBox = {
    minHeight: "54px",
    cursor: "pointer",
    borderColor: dropdownOpen
      ? "#2563EB"
      : "#D1D5DB",
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }


  return (
    <>
      <div className="p-3 sticky-top" style={{ backgroundColor: "#FAFBFE" }}>
        <Taskhead />
      </div>

      <div className="p-3" style={{ backgroundColor: "#FAFBFE" }}>
        <Taskvisits />
        <Taskboard />
      </div>
      <div className="card">
        <div className="modal fade modal-xl" id='addTaskid' data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby='addTaskBackdropLabel' aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <div className="row w-50 g-0">
                  <div className="col-2 text-center align-content-center">
                    <span className={`${Styles.addtask_icon}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-clipboard2-check me-3" viewBox="0 0 16 16">
                      <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5z" />
                      <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z" />
                      <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z" />
                    </svg></span>
                  </div>
                  <div className="col-10 align-content-center">
                    <h1 className={`modal-title fs-5 ${Styles.modal_name}`} id="addTaskBackdropLabel">Add New Task</h1>
                    <p className={`${Styles.modal_description} text-muted mt-1`}>Create a new task or assign work to your team.</p>
                  </div>
                </div>
                <button className="btn-close" type='button' data-bs-dismiss="modal" aria-label='close'></button>
              </div>
              <div className="modal-body p-0 overflow-hidden">
                <div className="row">
                  <div className="col-6" style={{ borderRight: "2px solid #ECEDFD" }}>
                    <form className="row g-1 p-4" onSubmit={handleSubmit}>
                      <div className="col-12">
                        <label htmlFor="tasktitle" className={`form-label ${Styles.form_label}`} >Task Title</label>
                        <input type="text" className={`form-control ${Styles.input_field}`} id="tasktitle" placeholder='Enter task title' />
                        <div className="form-text">A clear and concise title helps everyone understand the task.</div>
                      </div>
                      <div className="col-12">
                        <label htmlFor="taskDescription" className={`form-label ${Styles.form_label} mt-2`}>Description</label>
                        <textarea name="" className={`form-control ${Styles.task_description_input}`} id="taskDescription" rows={3} placeholder='Enter task description....'></textarea>
                        <div className="form-text">Describe the task, requirements, steps or any additional details.</div>
                      </div>
                      <div className="col-6">
                        <label htmlFor="projectName" className={`${Styles.form_label} mt-2 mb-2`}>Project</label>
                        <div className={`dropdown  ${Styles.dropdown} bg-white`} id='projectName'>
                          <div className={`dropdown-toggle ${Styles.dropdown_toggle} overflow-hidden p-1`} data-bs-toggle="dropdown" aria-expanded="false">
                            Select project..
                          </div>
                          <ul className={`dropdown-menu ${Styles.dropdown_menu} w-100`}>
                            <li className={`dropdown-item ${Styles.dropdown_item} mb-1 `}>
                              <span className='me-2'><i className={`bi bi-globe ${Styles.icon}`}></i></span><span>Snapbug Website</span>
                            </li>
                            <li className={`dropdown-item ${Styles.dropdown_item} `}>
                              <span className='me-2'><i className={`bi bi-phone ${Styles.icon}`}></i></span><span>Mobile App</span>
                            </li>
                          </ul>
                        </div>
                        <div className="form-text">Select the project this task belongs to.</div>
                      </div>
                      <div className="col-6">
                        <label htmlFor="taskType" className={`${Styles.form_label} mt-2 mb-2`}>Task Type</label>
                        <div className={`dropdown  ${Styles.dropdown} bg-white`} id='taskType'>
                          <div className={`dropdown-toggle ${Styles.dropdown_toggle_tasktype} overflow-hidden p-1`} data-bs-toggle="dropdown" aria-expanded="false">
                            Select task type
                          </div>
                          <ul className={`dropdown-menu ${Styles.dropdown_menu} w-100`}>
                            <li className={`dropdown-item ${Styles.dropdown_item}`}>
                              <div className="row">
                                <div className="col-1 align-content-center"><i className={`bi bi-camera ${Styles.icon}`} style={{ color: "#3966F4" }}></i></div>
                                <div className="col-10 d-flex flex-column">
                                  <span className={`${Styles.task_type}`}>Feature</span>
                                  <span className={`${Styles.type_description} text-muted`}>New functionality or improvement </span>
                                </div>
                              </div>
                            </li>
                            <li className={`dropdown-item ${Styles.dropdown_item}`}>
                              <div className="row">
                                <div className="col-1 align-content-center"><i className={`bi bi-bug ${Styles.icon}`} style={{ color: "red" }}></i></div>
                                <div className="col-10 d-flex flex-column">
                                  <span className={`${Styles.task_type}`}>Bug</span>
                                  <span className={`${Styles.type_description} text-muted`}>Something isn't working as expected</span>
                                </div>
                              </div>
                            </li>
                            <li className={`dropdown-item ${Styles.dropdown_item}`}>
                              <div className="row">
                                <div className="col-1 align-content-center"><i className={`bi bi-check-circle ${Styles.icon}`} style={{ color: "#73DB99" }}></i></div>
                                <div className="col-10 d-flex flex-column">
                                  <span className={`${Styles.task_type}`}>Task</span>
                                  <span className={`${Styles.type_description} text-muted`}>General or to-do item </span>
                                </div>
                              </div>
                            </li>
                            <li className={`dropdown-item ${Styles.dropdown_item}`}>
                              <div className="row">
                                <div className="col-1 align-content-center"><i className={`bi bi-graph-up-arrow ${Styles.icon}`} style={{ color: "#8741F1" }}></i></div>
                                <div className="col-10 d-flex flex-column">
                                  <span className={`${Styles.task_type}`}>Improvement</span>
                                  <span className={`${Styles.type_description} text-muted`}>Enhancement to existing functionality </span>
                                </div>
                              </div>
                            </li>
                            <li className={`dropdown-item ${Styles.dropdown_item}`}>
                              <div className="row">
                                <div className="col-1 align-content-center"><i className={`bi bi-search ${Styles.icon}`} style={{ color: "#FB9C56" }}></i></div>
                                <div className="col-10 d-flex flex-column">
                                  <span className={`${Styles.task_type}`}>Research</span>
                                  <span className={`${Styles.type_description} text-muted`}>Investigate and gather information</span>
                                </div>
                              </div>
                            </li>
                            <li className={`dropdown-item ${Styles.dropdown_item}`}>
                              <div className="row">
                                <div className="col-1 align-content-center"><i className={`bi bi-file-earmark-font ${Styles.icon}`} style={{ color: "#6BCDC6" }}></i></div>
                                <div className="col-10 d-flex flex-column">
                                  <span className={`${Styles.task_type}`}>Documentation</span>
                                  <span className={`${Styles.type_description} text-muted`}>Write or update documentation</span>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="form-text">Select the project this task belongs to.</div>
                      </div>
                      <div className="col-6">
                        <label htmlFor="taskPriority" className={`${Styles.form_label} mt-2 mb-2`}>Priority</label>
                        <div className={`dropdown  ${Styles.dropdown} bg-white`} id='taskPriority'>
                          <div className={`dropdown-toggle ${Styles.dropdown_toggle_taskpriority} overflow-hidden p-1`} data-bs-toggle="dropdown" aria-expanded="false">
                            Select priority
                          </div>
                          <ul className={`dropdown-menu ${Styles.dropdown_menu} w-100`}>
                            <li className={`dropdown-item ${Styles.dropdown_item}`}>
                              <div className="row">
                                <div className="col-1 align-content-center"><i className={`bi bi-chevron-double-up ${Styles.icon}`} style={{ color: "#FE6666" }}></i></div>
                                <div className="col-10 d-flex flex-column">
                                  <span className={`${Styles.priority_type} `}>Highest<span className={`${Styles.priority_condition_highest}`}>Critical</span></span>
                                  <span className={`${Styles.priority_description} text-muted`}>Require immediate attention</span>
                                </div>
                              </div>
                            </li>
                            <li className={`dropdown-item ${Styles.dropdown_item}`}>
                              <div className="row">
                                <div className="col-1 align-content-center"><i className={`bi bi-arrow-up ${Styles.icon}`} style={{ color: "#FF292E" }}></i></div>
                                <div className="col-10 d-flex flex-column">
                                  <span className={`${Styles.task_type}`}>High <span className={`${Styles.priority_condition_high}`}>High</span></span>
                                  <span className={`${Styles.type_description} text-muted`}>Important but not blocking</span>
                                </div>
                              </div>
                            </li>
                            <li className={`dropdown-item ${Styles.dropdown_item}`}>
                              <div className="row">
                                <div className="col-1 align-content-center"><i className={`bi bi-dash-lg ${Styles.icon}`} style={{ color: "#FBC85F" }}></i></div>
                                <div className="col-10 d-flex flex-column">
                                  <span className={`${Styles.task_type}`}>Medium <span className={`${Styles.priority_condition_medium}`}>Medium</span></span>
                                  <span className={`${Styles.type_description} text-muted`}>Important with normal priority</span>
                                </div>
                              </div>
                            </li>
                            <li className={`dropdown-item ${Styles.dropdown_item}`}>
                              <div className="row">
                                <div className="col-1 align-content-center"><i className={`bi bi-arrow-down ${Styles.icon}`} style={{ color: "#109545" }}></i></div>
                                <div className="col-10 d-flex flex-column">
                                  <span className={`${Styles.task_type}`}>Low <span className={`${Styles.priority_condition_low}`}>Low</span></span>
                                  <span className={`${Styles.type_description} text-muted`}>Minor issues or nice to have</span>
                                </div>
                              </div>
                            </li>
                            <li className={`dropdown-item ${Styles.dropdown_item}`}>
                              <div className="row">
                                <div className="col-1 align-content-center"><i className={`bi bi-chevron-double-down ${Styles.icon}`} style={{ color: "#6C92FD" }}></i></div>
                                <div className="col-10 d-flex flex-column">
                                  <span className={`${Styles.task_type}`}>Lowest <span className={`${Styles.priority_condition_lowest}`}>Lowest</span></span>
                                  <span className={`${Styles.type_description} text-muted`}>No immediate impact</span>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="form-text">Set the priority level for this task.</div>
                      </div>
                      <div className="col-6">
                        <label htmlFor="taskPriority" className={`${Styles.form_label} mt-2 mb-2`}>Status</label>
                        <div className={`dropdown  ${Styles.dropdown} bg-white`} id='taskPriority'>
                          <div className={`dropdown-toggle ${Styles.dropdown_toggle_taskpriority} overflow-hidden p-1`} data-bs-toggle="dropdown" aria-expanded="false">
                            Select status
                          </div>
                          <ul className={`dropdown-menu ${Styles.dropdown_menu} w-100`}>
                            <li className={`dropdown-item ${Styles.dropdown_item}`}>
                              <div className="row">
                                <div className="col-1 align-content-center"><div className={`${Styles.status_todo_color}`}></div></div>
                                <div className="col-10 d-flex flex-column">
                                  <span className={`${Styles.priority_type} `}>To Do</span>
                                  <span className={`${Styles.priority_description} text-muted`}>Task is created and need to be started</span>
                                </div>
                              </div>
                            </li>
                            <li className={`dropdown-item ${Styles.dropdown_item}`}>
                              <div className="row">
                                <div className="col-1 align-content-center"><div className={`${Styles.status_inprogress_color}`}></div></div>
                                <div className="col-10 d-flex flex-column">
                                  <span className={`${Styles.task_type}`}>In Progress</span>
                                  <span className={`${Styles.type_description} text-muted`}>Work has started in this task</span>
                                </div>
                              </div>
                            </li>
                            <li className={`dropdown-item ${Styles.dropdown_item}`}>
                              <div className="row">
                                <div className="col-1 align-content-center"><div className={`${Styles.status_inreview_color}`}></div></div>
                                <div className="col-10 d-flex flex-column">
                                  <span className={`${Styles.task_type}`}>In Review</span>
                                  <span className={`${Styles.type_description} text-muted`}>Task is under review</span>
                                </div>
                              </div>
                            </li>
                            <li className={`dropdown-item ${Styles.dropdown_item}`}>
                              <div className="row">
                                <div className="col-1 align-content-center"><div className={`${Styles.status_blocked_color}`}></div></div>
                                <div className="col-10 d-flex flex-column">
                                  <span className={`${Styles.task_type}`}>Blocked</span>
                                  <span className={`${Styles.type_description} text-muted`}>Task is blocked or waiting on something</span>
                                </div>
                              </div>
                            </li>
                            <li className={`dropdown-item ${Styles.dropdown_item}`}>
                              <div className="row">
                                <div className="col-1 align-content-center"><div className={`${Styles.status_done_color}`}></div></div>
                                <div className="col-10 d-flex flex-column">
                                  <span className={`${Styles.task_type}`}>Done</span>
                                  <span className={`${Styles.type_description} text-muted`}>Task is completed</span>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="form-text">Current status of the task.</div>
                      </div>

                    </form>
                  </div>

                  <div className="col-6">
                    <form onClick={handleSubmit} className='row g-1 p-4'>
                      <div className="col-12">
                        <label htmlFor="assigneeName" className={`${Styles.form_label} mt-2 mb-2`}>Assignee</label>
                        <div className={`dropdown  ${Styles.dropdown} bg-white`} id='assigneeName'>
                          <div className={`dropdown-toggle ${Styles.dropdown_toggle_select_assignee} overflow-hidden p-1`} data-bs-toggle="dropdown" aria-expanded="false">
                            Select member
                          </div>
                          <ul className={`dropdown-menu ${Styles.dropdown_menu} w-100`}>
                            <li className={`dropdown-item ${Styles.dropdown_item} mb-1 `}>
                              <span className='me-2'><img src={profile} alt="image" className={`${Styles.profile_image}`} height={35} width={35} /></span> <span>Sachin negi</span>

                            </li>
                            <li className={`dropdown-item ${Styles.dropdown_item} `}>
                              <span className='me-2'><img src={profile} alt="image" className={`${Styles.profile_image}`} height={35} width={35} /></span><span>Sachin negi</span>
                            </li>
                          </ul>
                        </div>
                        <div className="form-text">Assign this task to a team member.</div>
                      </div>
                      <div className="col-12">
                        <label htmlFor="dueDate" className={`${Styles.form_label} mt-2 mb-2`}>Due Date</label>
                        <input type="date" className={`form-control ${Styles.input_field}`} id="dueDate" />
                        <div className="form-text">Select the due date for this task.</div>
                      </div>
                      <div className="col-12">
                        <label htmlFor="" className={`${Styles.form_label} mb-3`}>Labels</label>

                        {/* Dropdoen wrapper */}

                        <div ref={dropdownRef}>
                          {/* Select box */}
                          <div className="border rounded-4 p-2 d-flex flex-wrap align-items-center gap-2" style={labelDropdownSelectBox} onClick={() => setDropdownOpen(!dropdownOpen)}>
                            {/* Selected labels */}
                            {selectedLabels.map((label) => (
                              <div key={label.id} className='d-flex align-items-center gap-2 px-3 py-1 rounded-3' style={{
                                background: `${label.color}20`,
                                color: label.color,
                                fontWeight: 500,
                                fontSize: "14px",
                              }}>
                                <div style={{
                                  width: "8px",
                                  height: "8px",
                                  borderRadius: "50%",
                                  background:
                                    label.color,
                                }}></div>
                                {label.name}
                                <X size={14} style={{ cursor: "pointer" }} onClick={(e) => {
                                  e.stopPropagation();
                                  removeLabel(
                                    label.id
                                  );
                                }} />
                              </div>
                            ))}

                            {/* Input */}

                            <input type="text" placeholder='Select labels...' className='border-0 flex-grow-1' style={{ outline: "none", minWidth: "140px" }} value={search} onChange={
                              (e) => {
                                setSearch(e.target.value);
                                setDropdownOpen(true);
                              }
                            }
                              onClick={(e) =>
                                e.stopPropagation()
                              } />

                            {/* Arrow */}

                            <ChevronDown size={18} style={{ transition: "0.3s", transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
                          </div>

                          {/* dropdown menu */}

                          {dropdownOpen && (
                            <div className="border rounded-4 p-3 mt-2 bg-white shadow-sm position-relative w-100 " style={{ zIndex: "1000", }}>
                              {/* Search */}
                              <div className="position-relative mb-4">
                                <input type="text" placeholder='Search labels...' className='form-control rounded-3 ps-5' value={search} onChange={(e) => setSearch(e.target.value)} />
                                <Search size={18} className='position-absolute' style={{ left: "15px", top: "12px", color: "#6B7280" }} />
                              </div>

                              {/* Heading */}

                              <p className='fw-semibold mb-3' style={{ fontSize: "14px" }}>Suggested Labels</p>

                              {/* Label options */}

                              <div className="row g-3">
                                {filteredLabels.map(
                                  (label) => (
                                    <div className="col-4" key={label.id}>
                                      <div className="d-flex align-items-center gap-2 p-2 rounded-3"
                                        style={{ backgroundColor: "#F8FAFC", cursor: "pointer", border: isSelected(label) ? `2px solid ${label.color}` : "2px solid transparent", }}
                                        onClick={() => toggleLabel(label)}>
                                        <input type="checkbox" checked={isSelected(label)} readOnly />
                                        <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: label.color, }} />
                                        <span style={{ fontSize: "14px" }}>
                                          {label.name}
                                        </span>
                                      </div>
                                    </div>
                                  )
                                )}
                              </div>

                              {/* Create Button */}
                              <button className='btn btn-link d-flex text-decoration-none mt-4 p-0 fw-semibold' onClick={createNewLabel}>
                                <Plus size={18} />
                                <span className='ms-2'>Create new label</span>
                              </button>

                            </div>
                          )}
                        </div>
                      </div>
                    </form>
                  </div>

                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className={`btn ${Styles.cancel_btn}`} data-bs-dismiss="modal">Cancel</button>
                <button type="button" className={`btn ${Styles.create_task_btn}`}><i class="bi bi-send"></i> Create Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tasks;