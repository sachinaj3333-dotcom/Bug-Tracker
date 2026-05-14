import React from 'react'
import Styles from "../../../styles/main page components/Tasks/Taskboard.module.css";
import image from "../../../assets/myimage.jpeg"

const Taskboard = () => {
  return (
    <>
      <div className="row g-0 mt-3">
        <div className="col">
          <div className={`card py-1 ${Styles.board_card}`}>
            <div className={`card-body ${Styles.board_head_parent}`}>
              <ul className={`${Styles.board_head}`}>
                <li className={`${Styles.head_list}`}>
                  <span className={`${Styles.head_items}`}>All Tasks</span>
                </li>
                <li className={`${Styles.head_list} ms-5`}>
                  <span className={`${Styles.head_items}`}>My Tasks</span>
                </li>
                <li className={`${Styles.head_list} ms-5`}>
                  <span className={`${Styles.head_items}`}>Assigned to Me</span>
                </li>
                <li className={`${Styles.head_list} ms-5`}>
                  <span className={`${Styles.head_items}`}>Created by Me</span>
                </li>
                <li className={`${Styles.head_list} ms-5`}>
                  <span className={`${Styles.head_items}`}>Due Today</span>
                </li>
                <li className={`${Styles.head_list} ms-5`}>
                  <span className={`${Styles.head_items}`}>Overdue</span>
                </li>
                <li className={`${Styles.head_list} ms-5`}>
                  <span className={`${Styles.head_items}`}>Completed</span>
                </li>
              </ul>
            </div>

            <div className={`card-body ${Styles.filter_section}`}>
              <form role='search'>
                <input type="search" placeholder='Search tasks by title or ID...' aria-label='search' className={`${Styles.search_input} form-control`} />
              </form>

              <div className="dropdown ms-auto">
                <button className={`btn btn-secondary dropdown-toggle ${Styles.dropdown_button}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Status
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
              <div className="dropdown ms-3">
                <button className={`btn btn-secondary dropdown-toggle ${Styles.dropdown_button}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Priority
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
              <div className="dropdown ms-3">
                <button className={`btn btn-secondary dropdown-toggle ${Styles.dropdown_button}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Assignee
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
              <div className="dropdown ms-3">
                <button className={`btn btn-secondary dropdown-toggle ${Styles.dropdown_button}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Project
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
            </div>
            <table className={`table border-0 m-0 ${Styles.board_table}`}>
              <thead>
                <tr>
                  <th scope="col" className={`${Styles.table_heading}`}>Task</th>
                  <th scope="col" className={`${Styles.table_heading}`}>Project</th>
                  <th scope="col" className={`${Styles.table_heading}`}>Status</th>
                  <th scope="col" className={`${Styles.table_heading}`}>Priority</th>
                  <th scope="col" className={`${Styles.table_heading}`}>Assignee</th>
                  <th scope="col" className={`${Styles.table_heading}`}>Due Date</th>
                  <th scope="col" className={`${Styles.table_heading}`}>Labels</th>
                  <th scope="col" className={`${Styles.table_heading}`}>Updated</th>
                  <th scope="col" className={`${Styles.table_heading}`}>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"><span className={`${Styles.task_name}`}>Design homepage UI</span><br />
                    <span className={`${Styles.Key} text-muted`}>SBW-101</span>
                  </th>
                  <td className='align-content-center'><span className={`${Styles.Project_name}`}>SnapBug Website</span></td>
                  <td className='align-content-center'><span className={`${Styles.status}`}>To Do</span></td>
                  <td className='align-content-center'><span className={`${Styles.priority}`}><span className='text-danger'>+</span> High</span></td>
                  <td className='align-content-center'><span><img src={image} alt="profile" height={20} width={20} className={`${Styles.image}`} /> <span className={`${Styles.assignee_name}`}>Sachin Negi</span></span></td>
                  <td className='align-content-center'><span className={`${Styles.due_date} text-muted`}>May 08,2026</span></td>
                  <td className="align-content-center"><span className={`${Styles.label}`}>Design</span></td>
                  <td className='align-content-center'><span className={`${Styles.time} text-muted`}>2h ago</span></td>
                  <td className='align-content-center'><span className={`${Styles.action}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                    </svg>  
                  </span></td>
                </tr>
                <tr>
                  <th scope="row"><span className={`${Styles.task_name}`}>Design homepage UI</span><br />
                    <span className={`${Styles.Key} text-muted`}>SBW-101</span>
                  </th>
                  <td className='align-content-center'><span className={`${Styles.Project_name}`}>SnapBug Website</span></td>
                  <td className='align-content-center'><span className={`${Styles.status}`}>To Do</span></td>
                  <td className='align-content-center'><span className={`${Styles.priority}`}><span className='text-danger'>+</span> High</span></td>
                  <td className='align-content-center'><span><img src={image} alt="profile" height={20} width={20} className={`${Styles.image}`} /> <span className={`${Styles.assignee_name}`}>Sachin Negi</span></span></td>
                  <td className='align-content-center'><span className={`${Styles.due_date} text-muted`}>May 08,2026</span></td>
                  <td className="align-content-center"><span className={`${Styles.label}`}>Design</span></td>
                  <td className='align-content-center'><span className={`${Styles.time} text-muted`}>2h ago</span></td>
                  <td className='align-content-center'><span className={`${Styles.action}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                    </svg>  
                  </span></td>
                </tr>
                <tr>
                  <th scope="row"><span className={`${Styles.task_name}`}>Design homepage UI</span><br />
                    <span className={`${Styles.Key} text-muted`}>SBW-101</span>
                  </th>
                  <td className='align-content-center'><span className={`${Styles.Project_name}`}>SnapBug Website</span></td>
                  <td className='align-content-center'><span className={`${Styles.status}`}>To Do</span></td>
                  <td className='align-content-center'><span className={`${Styles.priority}`}><span className='text-danger'>+</span> High</span></td>
                  <td className='align-content-center'><span><img src={image} alt="profile" height={20} width={20} className={`${Styles.image}`} /> <span className={`${Styles.assignee_name}`}>Sachin Negi</span></span></td>
                  <td className='align-content-center'><span className={`${Styles.due_date} text-muted`}>May 08,2026</span></td>
                  <td className="align-content-center"><span className={`${Styles.label}`}>Design</span></td>
                  <td className='align-content-center'><span className={`${Styles.time} text-muted`}>2h ago</span></td>
                  <td className='align-content-center'><span className={`${Styles.action}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                    </svg>  
                  </span></td>
                </tr>
                <tr>
                  <th scope="row"><span className={`${Styles.task_name}`}>Design homepage UI</span><br />
                    <span className={`${Styles.Key} text-muted`}>SBW-101</span>
                  </th>
                  <td className='align-content-center'><span className={`${Styles.Project_name}`}>SnapBug Website</span></td>
                  <td className='align-content-center'><span className={`${Styles.status}`}>To Do</span></td>
                  <td className='align-content-center'><span className={`${Styles.priority}`}><span className='text-danger'>+</span> High</span></td>
                  <td className='align-content-center'><span><img src={image} alt="profile" height={20} width={20} className={`${Styles.image}`} /> <span className={`${Styles.assignee_name}`}>Sachin Negi</span></span></td>
                  <td className='align-content-center'><span className={`${Styles.due_date} text-muted`}>May 08,2026</span></td>
                  <td className="align-content-center"><span className={`${Styles.label}`}>Design</span></td>
                  <td className='align-content-center'><span className={`${Styles.time} text-muted`}>2h ago</span></td>
                  <td className='align-content-center'><span className={`${Styles.action}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                    </svg>  
                  </span></td>
                </tr>
                <tr>
                  <th scope="row"><span className={`${Styles.task_name}`}>Design homepage UI</span><br />
                    <span className={`${Styles.Key} text-muted`}>SBW-101</span>
                  </th>
                  <td className='align-content-center'><span className={`${Styles.Project_name}`}>SnapBug Website</span></td>
                  <td className='align-content-center'><span className={`${Styles.status}`}>To Do</span></td>
                  <td className='align-content-center'><span className={`${Styles.priority}`}><span className='text-danger'>+</span> High</span></td>
                  <td className='align-content-center'><span><img src={image} alt="profile" height={20} width={20} className={`${Styles.image}`} /> <span className={`${Styles.assignee_name}`}>Sachin Negi</span></span></td>
                  <td className='align-content-center'><span className={`${Styles.due_date} text-muted`}>May 08,2026</span></td>
                  <td className="align-content-center"><span className={`${Styles.label}`}>Design</span></td>
                  <td className='align-content-center'><span className={`${Styles.time} text-muted`}>2h ago</span></td>
                  <td className='align-content-center'><span className={`${Styles.action}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                    </svg>  
                  </span></td>
                </tr>
                <tr>
                  <th scope="row"><span className={`${Styles.task_name}`}>Design homepage UI</span><br />
                    <span className={`${Styles.Key} text-muted`}>SBW-101</span>
                  </th>
                  <td className='align-content-center'><span className={`${Styles.Project_name}`}>SnapBug Website</span></td>
                  <td className='align-content-center'><span className={`${Styles.status}`}>To Do</span></td>
                  <td className='align-content-center'><span className={`${Styles.priority}`}><span className='text-danger'>+</span> High</span></td>
                  <td className='align-content-center'><span><img src={image} alt="profile" height={20} width={20} className={`${Styles.image}`} /> <span className={`${Styles.assignee_name}`}>Sachin Negi</span></span></td>
                  <td className='align-content-center'><span className={`${Styles.due_date} text-muted`}>May 08,2026</span></td>
                  <td className="align-content-center"><span className={`${Styles.label}`}>Design</span></td>
                  <td className='align-content-center'><span className={`${Styles.time} text-muted`}>2h ago</span></td>
                  <td className='align-content-center'><span className={`${Styles.action}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                    </svg>  
                  </span></td>
                </tr>
                <tr>
                  <th scope="row"><span className={`${Styles.task_name}`}>Design homepage UI</span><br />
                    <span className={`${Styles.Key} text-muted`}>SBW-101</span>
                  </th>
                  <td className='align-content-center'><span className={`${Styles.Project_name}`}>SnapBug Website</span></td>
                  <td className='align-content-center'><span className={`${Styles.status}`}>To Do</span></td>
                  <td className='align-content-center'><span className={`${Styles.priority}`}><span className='text-danger'>+</span> High</span></td>
                  <td className='align-content-center'><span><img src={image} alt="profile" height={20} width={20} className={`${Styles.image}`} /> <span className={`${Styles.assignee_name}`}>Sachin Negi</span></span></td>
                  <td className='align-content-center'><span className={`${Styles.due_date} text-muted`}>May 08,2026</span></td>
                  <td className="align-content-center"><span className={`${Styles.label}`}>Design</span></td>
                  <td className='align-content-center'><span className={`${Styles.time} text-muted`}>2h ago</span></td>
                  <td className='align-content-center'><span className={`${Styles.action}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                    </svg>  
                  </span></td>
                </tr>
                <tr>
                  <th scope="row"><span className={`${Styles.task_name}`}>Design homepage UI</span><br />
                    <span className={`${Styles.Key} text-muted`}>SBW-101</span>
                  </th>
                  <td className='align-content-center'><span className={`${Styles.Project_name}`}>SnapBug Website</span></td>
                  <td className='align-content-center'><span className={`${Styles.status}`}>To Do</span></td>
                  <td className='align-content-center'><span className={`${Styles.priority}`}><span className='text-danger'>+</span> High</span></td>
                  <td className='align-content-center'><span><img src={image} alt="profile" height={20} width={20} className={`${Styles.image}`} /> <span className={`${Styles.assignee_name}`}>Sachin Negi</span></span></td>
                  <td className='align-content-center'><span className={`${Styles.due_date} text-muted`}>May 08,2026</span></td>
                  <td className="align-content-center"><span className={`${Styles.label}`}>Design</span></td>
                  <td className='align-content-center'><span className={`${Styles.time} text-muted`}>2h ago</span></td>
                  <td className='align-content-center'><span className={`${Styles.action}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                    </svg>  
                  </span></td>
                </tr>

              </tbody>
            </table>
            <div className="card-body d-flex align-content-center pb-0">
              <span className={`${Styles.pagination_detail} text-muted align-content-top`}>showing 1 to 5 of 24 projects</span>
              <span className='ms-auto mb-0'>
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
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Taskboard;