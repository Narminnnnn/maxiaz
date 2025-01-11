import React from 'react'
import "./About.css"
import { IoIosArrowForward } from 'react-icons/io'

const About = () => {
  return (
    <section className='aboutSection'>
        <div className="allAboutSec">
        <div className="homePage">
                <a href="./">Ana Sehife</a>
                <span >
                  <IoIosArrowForward /> Haqqimizda
                </span>
              </div>
      <div className="aboutContainer">
        <div className="textAbout">
            <h2 className='maxiAbout'>maxi.az - SİZİN
            YENI TEXNİKANIZ</h2>
            <p className='vasiteciler'>Vasitəçilər və təchizatçılar olmadan birbaşa səbətinizə </p>
        </div>
      </div>

        </div>
    </section>
  )
}

export default About
