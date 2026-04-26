import React from 'react'
import AuthSide from '../../components/auth/Authside';
import Styles from "../../styles/auth/Signin.module.css";
import SigninForm from '../../components/auth/Signinform';

const Signin = () => {
  return (
    <>
    <div className="container p-5">
        <div className={`row mt-4 ${Styles.signin_container}`}>
            <div className={`col-lg-6 ${Styles.left_section}`}>
                <AuthSide/>
            </div>
            <div className={`col-lg-6 p-5 ${Styles.right_section}`}>
                <SigninForm/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Signin;