

import React from 'react'
import './Portfolio.css'

import { Container, Row ,Col } from 'reactstrap'

import img01 from '../../assests/images/jammming.png'
import img02 from '../../assests/images/Exercise Tracker.png'
import img03 from '../../assests/images/colmar.png'

const portfolioData = [
    {
        imgUrl : img01,
        title: 'Jammming',
        tool : 'React.js, Javascript',
        item :  'https://first-jamming.surge.sh/',
        description : "I build this by using react.js and use api to get list from spotify"
    },
    {
        imgUrl : img02,
        title: 'Exercise Tracker',
        tool : 'React.js, Javascript',
        item :  'https://test-deploy-hazel-tau.vercel.app/',
        description : "This is my final project I MERN stack to create it "
    },
    {
        imgUrl : img03,
        title: 'Colmar',
        tool : 'HTML, CSS, BootStrap',
        item :  'https://github.com/qapd01?tab=repositories',
        description : " I build this web from paper request turn it to web by using HTML, CSS and Boostrap"
    },
   
]

const Portfolio = () => {
  return <section id='project'>
    <Container>
        <Row>
            <Col lg='12' className='portfolio__top mb-5'>
                <h6>Explore my work and give a feedback</h6>
                <h2>Projects</h2>
            </Col>

            {
                portfolioData.map((item,index) => <Col lg='4' md='6' sm='6'key={index}>
                <div className="portfolio__card">
                    <div className="portfolio__img">
                        <img src={item.imgUrl} alt="" className='w-100'/>
                    </div> 
    
                    <div className="portfolio__content">
                      <h5>{item.title}</h5>
                      <p>{item.description}</p>
                      <p>{item.tool}</p>
                      <a href={item.item}><i class="ri-github-line"></i></a>
                    </div> 
                </div>
                </Col>)
            }

           
        </Row>
    </Container>
  </section>
}

export default Portfolio
