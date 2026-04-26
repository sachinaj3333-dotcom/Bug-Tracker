import React from 'react'
import logo from "../../assets/image.png";
import Styles from "../../styles/auth/Authside.module.css";

const AuthSide = () => {
    return (
        <>
            <div className={`container p-5 ${Styles.intro_section}`}>
                <span><img src={logo} alt="Logo" height={70} className={`${Styles.logo}`}/></span><span className={`${Styles.logoname}`}>SnapBug</span>
                <p className={`${Styles.text} mb-0`}>Manage work.</p>
                <p className={`${Styles.text} mb-0`}>Track bugs.</p>
                <p className={`${Styles.text}`}>Ship faster.</p>
                <p className={`${Styles.subtext}`}>A simple and powerful workflow <br /> system for modern teams.</p>
            </div>
        </>
    )
}

export default AuthSide;