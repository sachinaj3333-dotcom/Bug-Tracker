import React from 'react'
import Styles from "../../styles/auth/Signupform.module.css";
import { Link } from 'react-router-dom';
import signUpHelper from '../../helper/auth/sign-up-helper.js';

const SignupForm = () => {

  const { handleChange, handleSubmit, errors, formValue} = signUpHelper();  


  return (
    <>
      <h2 className={`${Styles.heading}`}>Create your account</h2>
      <p className={`text-muted`}>Start managing tasks and tracking bugs efficiently</p>

      {/* Signup form */}

      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-12 mb-2">
          <label className={`form-label ${Styles.formlabel}`}>Name</label>
          <span className={`${Styles.name_logo}`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
          </svg></span>
          <input type="text" className={`form-control ${Styles.input_area}`}  onChange={handleChange} value={formValue.userName} name='userName' placeholder='Enter your Name' />
          { errors.userName && (
            <span className={`text-danger ${Styles.error}`}>{errors.userName}</span>
          )}
        </div> 
        <div className="col-md-12 mb-2">
          <label className={`form-label ${Styles.formlabel}`}>Email address</label>
          <span className={`${Styles.email_logo}`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
          </svg></span>
          <input type="email" className={`form-control ${Styles.input_area}`} onChange={handleChange} value={formValue.userEmail} name='userEmail' placeholder='Enter your email' />
          { errors.userEmail && (
            <span className={`text-danger ${Styles.error}`}>{errors.userEmail}</span>
          )}
        </div> 
        <div className="col-lg-6 mb-3">
          <label className={`form-label ${Styles.formlabel}`}>Password</label>
          <span className={`${Styles.password_logo}`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 0a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4M4.5 7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7zM8 1a3 3 0 0 0-3 3v2h6V4a3 3 0 0 0-3-3" />
          </svg></span>
          <input type="password" className={`form-control ${Styles.input_area}`} onChange={handleChange} value={formValue.userPass} name='userPass' placeholder='Create a password' />
          {errors.userPass && (
            <span className={`text-danger ${Styles.error}`}>{errors.userPass}</span>
          )}
        </div>
        <div className="col-lg-6 mb-3">
          <label className={`form-label ${Styles.formlabel}`}>Confirm password</label>
          <span className={`${Styles.confirmpass_logo}`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 0a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4M4.5 7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7zM8 1a3 3 0 0 0-3 3v2h6V4a3 3 0 0 0-3-3" />
          </svg></span>
          <input type="password" className={`form-control ${Styles.input_area}`} onChange={handleChange} value={formValue.confirmPass} name='confirmPass' placeholder="Confirm your password" />
          {errors.confirmPass && (
            <span className={`text-danger ${Styles.error}`}>{errors.confirmPass}</span>
          )}
        </div>

        <div className="col-12 mb-2">
          <button type="submit" className="btn btn-primary w-100">Sign up</button>
          <p className='text-center mt-3'>Already have an account? <Link to={"/signin"}>Sign in</Link></p>
        </div>
      </form>
    </>
  )
}

export default SignupForm;