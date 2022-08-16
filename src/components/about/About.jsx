


import React, {useState} from 'react'
import './About.css'

import { Container,Row,Col } from 'reactstrap'

import aboutImg from '../../assests/images/B2.png'

import Education from './Education'

import Skills from './Skills'

const About = () => {

    const [aboutFilter, setAboutFilter] = useState('ABOUT')

  return <section id='about'>
    <Container>
        <Row>
            <Col lg='12'><h2 className='A-h2'>About Me</h2></Col>

            <Col lg='4' md='3'>
                <div className="about__btns d-flex flex-column align-items-center">
                    <button className={`about__btn ${aboutFilter === 'ABOUT' ? 'about__btn-active' : ''}`} onClick={() =>setAboutFilter('ABOUT')}>About me</button>
                    <button className={`about__btn ${aboutFilter === 'EDUCATION' ? 'about__btn-active' : ''}`} onClick={() =>setAboutFilter('EDUCATION')}>Education</button>
                    <button className={`about__btn ${aboutFilter === 'SKILLS' ? 'about__btn-active' : ''}`} onClick={() =>setAboutFilter('SKILLS')}>Skills</button>
                    {/* <button className='about__btn'>Award</button> */}
                </div>
            </Col>

            <Col lg='8' md='9'>

                {
                    aboutFilter === 'ABOUT' && <div className="about__content__wrapper d-flex gap-5">
                    <div className="about__img w-25">
                        <img src={aboutImg} alt="" className='w-100'/>
                    </div>

                    <div className="about__content w-75">
                        <h2>I'm Sorawid Mingmolee</h2>
                        <p>Hello.this is the tiny port of My web that I create. 
                            I'm studying in BootCamp of Generation Thailand in role Junior Software Developer and this portfolio is create for applying a job.</p>

                             <div className="social_links">
                                <h6 className='mb-3'>Connect with me :</h6>
                                <span><a href="https://web.facebook.com/sorawid.mingmolee"><i class="ri-facebook-line"></i></a></span>
                                <span><a href="https://www.linkedin.com/in/sorawid-mingmolee-434b36240"><i class="ri-linkedin-line"></i></a></span>
                                <span><a href="https://github.com/qapd01"><i class="ri-github-line"></i></a></span>
                             </div>
                    </div>
                </div>
                }

                {
                    aboutFilter === 'EDUCATION' && <Education/>
                }

                {
                    aboutFilter === 'SKILLS' && <Skills/>
                }

            </Col>

        </Row>
    </Container>
  </section>
}

export default About
