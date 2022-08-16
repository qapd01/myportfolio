


import React from 'react'
import { Container,Row,Col } from 'reactstrap'

import './Service.css'


const servicesData = [
    {
        icon : 'ri-code-s-slash-line',
        title: 'Web Design',
        desc : "Create web with HTML 5, CSS 3 and JavaScript"
    },
    {
        icon : 'ri-reactjs-line',
        title: 'Web Development',
        desc : "A JavaScript library for building user interfaces"
    },
    {
        icon : 'ri-database-2-line',
        title: 'Database',
        desc : "Cloud-hosted MongoDB and My SQL service "
    },
    
    
]


const Service = () => {
  return <section id="services">
    <Container>
        <Row>
            <Col lg='12' className='services__top mb-5'>
                <h2>Skills</h2>
                <h6>These are skills that I have.</h6>
            </Col>

            {
                servicesData.map((item,index) =>  <Col lg='4'  md='6' sm='6'key={index} className='mb-4'>


                <div className="single__service">
                    <span className="service__icon">
                        <img src="" alt="" />
                    <i class={item.icon}></i>
                    </span>

                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                </div>
            </Col>)
            }

          
        </Row>
    </Container>
  </section>
}

export default Service
