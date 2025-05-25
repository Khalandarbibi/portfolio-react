import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
// import profile_img from '../../assets/profile_img.svg'

const About = () => {
  return (
      <div id='about' className='about'>
        <div className='about-title'>
          <h1>About Me</h1> 
          <img src={theme_pattern} alt="" />
        </div>
        <div className='about-sections'>
          <div className='about-left'>
            {/* <img src={profile_img} alt="" /> */}
        </div>
        <div className='about-right'>
          <div className='about-para'>
            <p>I'm a Computer Science student at MCE with a passion for coding, problem-solving, and building smart, user-friendly applications. I enjoy working on web development, software projects, and exploring new technologies that make everyday tasks easier.</p>
            <p>I believe in learning by doing and love turning ideas into real, working solutions. From web apps to machine learning experiments, I'm always eager to take on new challenges and grow as a developer.
            </p>

          </div>
          <div className='about-skills'>
            <div className="about-skill"><p>React JS</p><hr style={
                {width:"50%"}}/></div>
            <div className="about-skill"><p>HTML & CSS</p><hr style={
                {width:"70%"}}/></div>
            <div className="about-skill"><p>Javascript</p><hr style={
                {width:"60%"}}/></div>
            <div className="about-skill"><p>c++</p><hr style={
                {width:"50%"}}/></div>
          </div>
         </div>
        </div>
        <div className="about-achievments">
          <div className="about-achievement">
            <h1>3rd</h1>
            <p>YEAR STUDENT</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>3+</h1>
            <p>PROJECTS COMPLETED</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>3+</h1>
            <p>ACTIVE ON GITHUB</p>
          </div>
        </div>
      </div>
      
  )
}

export default About
