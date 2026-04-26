import React from 'react'
import Styles from "../../styles/landing page/Home.module.css";

const Home = () => {
  return (
    <>
        <div className={`container ${Styles.hero_section} text-center`}>
          <h1 className= {`${Styles.tagline_one}`}>From planning to delivery</h1>
          <h1 className={ `${Styles.tagline_two} mb-3` }>everything in sync.</h1>
          <p className={`${Styles.subtext}`}>Track progress, resolve issues, and <br /> deliver better results with ease.</p>
          <button className={`${Styles.signup_btn}`}>Get started</button>
        </div>
    </>
  )
}

export default Home;