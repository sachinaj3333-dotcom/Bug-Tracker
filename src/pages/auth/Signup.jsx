import React from 'react'
import AuthSide from '../../components/auth/Authside';
import Styles from "../../styles/auth/Signup.module.css";
import SignupForm from '../../components/auth/Signupform';

const Signup = () => {
  return (
    <>
        <div className={`container p-5 `} >
            <div className={`row mt-4 ${Styles.signup_container}`}>
                <div className={`col-lg-6 ${Styles.left_section}`}>
                    <AuthSide/>
                </div>
                <div className={`col-lg-6 p-5  ${Styles.right_section}`}>
                    <SignupForm/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Signup;