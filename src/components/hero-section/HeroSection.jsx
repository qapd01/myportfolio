


import React from 'react'
import './HeroSection.css'

import { Container,Row,Col } from 'reactstrap'


import heroImg  from '../../assests/images/B1.png'

const HeroSection = () => {
  return <section className='hero_section' id='home'>
    <Container>
        <Row>
            <Col lg='6' md='6'>
                <div className="hero__content">

                    {/* <h2>Hello</h2> */}
                    <h1>Welcome to my world!</h1>
                    <h2 className='hero__title'>I'm <span>Sorawid Mingmolee</span></h2>
                    <p>As a former seaman turned a web developer, I have gained my leadership, teamwork and problem-solving skills from my past working experience, especially from unexpected problems in difficult situations. Curious by nature in computer and technology, all of these should render me as a successful developer, extended to other role in this IT career path.</p>

                    <div className="hero__btns">
                        {/* <button className="btn hire__btn"><a href="#">Hire Me</a></button>
                        <button className="btn">Contact</button> */}
                    </div>
                </div>
            </Col>


            <Col lg='6' md='6'>
                <div className="hero__img">
                    <img src={heroImg} alt="" className='img__hero'/>
                </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default HeroSection
