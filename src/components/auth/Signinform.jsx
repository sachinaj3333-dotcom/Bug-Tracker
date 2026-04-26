import React from 'react'
import Styles from "../../styles/auth/Signinform.module.css";
import { Link } from 'react-router-dom';
// import Signup from "../../pages/auth/Signup.jsx";

const SigninForm = () => {
    return (
        <>
            <h2 className={`${Styles.heading}`}>Welcome back</h2>
            <p className='text-muted'>Sign in to continue your account</p>

            {/* Signin form */}

            <form className="row g-3">
                
                <div className="col-md-12">
                    <label className={`form-label ${Styles.formlabel}`}>Email address</label>
                    <span className={`${Styles.email_logo}`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                    </svg></span>
                    <input type="email" className={`form-control ${Styles.input_area}`} name='userName' placeholder='Enter your email' />
                </div>
                <div className="col-md-12">
                    <label className={`form-label ${Styles.formlabel}`}>Password</label>
                    <span className={`${Styles.password_logo}`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 0a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4M4.5 7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7zM8 1a3 3 0 0 0-3 3v2h6V4a3 3 0 0 0-3-3" />
                    </svg></span>
                    <input type="password" className={`form-control ${Styles.input_area}`} name='userPass' placeholder='Enter yourpassword' />
                </div>
                

                <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100">Sign in</button>
                    <p className={` text-end mt-2`}><Link to={"#"} className={`text-decoration-none`}>Forgot password?</Link></p>
                    <p className='text-center'>Don't have an account? <Link to={"#"}>Sign up</Link></p>
                </div>
            </form>
        </>
    )
}

export default SigninForm;