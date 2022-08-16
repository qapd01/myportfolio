


import React from 'react'
import './Experience.css'

import { Container,Row,Col } from 'reactstrap'

const developmentExperienceData = [
    {
        year : '2021-2022',
        title: 'Emergency Medical Technician Volunteer (Sirikit Hospital)',
        desc : 'Teaching basic medical first aid, Administer a COVID-19 vaccine injection,Medical first aid on site'
    },
    {
        year : '2020-2021',
        title: 'Junior Officer (Precious Shipping Company )',
        desc : 'Keeping of cargo watch in port thereby assisting in cargo operations, Maintenance and upkeep of all deck portable fire fighting equipment and lifesaving appliances, Preparing schedules of training and drills under the guidance of chief officer'
    },
    {
        year : '2019-2020',
        title: 'Cargo Surveyor (Intertek Testing & Inspection Service)',
        desc : "Inspect cargo on seagoing vessels,Take sample from cargo"
    },
]

const developmentExperienceData1 = [
    {
        year : '2018-2019',
        title: 'Cadet (Precious Shipping Company )',
        desc : 'Taking charge of mooring and unmooring operation, Preparation of port papers for master, Maintaining stability by carrying out ballast and de-ballasting operation, Maintaining inventory of bonded stores, Assist in planning, coordinating and executing of tributes to combat readiness by promoting efficient communication'
    },
    {
        year : '2017-2018',
        title: 'Cargo Surveyor (Intertek Testing & Inspection Service)',
        desc : 'Inspect cargo on seagoing vessels,Take sample from cargo'
    },
    {
        year : '2016-2017',
        title: 'Merchant',
        desc : 'Selling Kids clothes and woman clothes'
    },
]

const Experience = () => {
  return <section>
    <Container>
        <Row>
            <Col lg='12' className='mb-5'>
                <h2>Experience</h2>
            </Col>

            <Col lg='6' md='6'>
                <div className="single__experience-container">
                    {
                        developmentExperienceData.map((item,index) =><div 
                        className="single__experience" key={index}>
                        <span className='experience__icon'>
                            <i class="ri-briefcase-line"></i>
                        </span>
                        <h6>{item.year}</h6>
                       <h5>{item.title}</h5>
                       <p>{item.desc}</p>
                    </div>)
                    }
                </div>
            </Col>

            <Col lg='6'  md='6'>
                <div className="single__experience-container">
                    {
                        developmentExperienceData1.map((item,index) =><div 
                        className="single__experience" key={index}>
                        <span className='experience__icon'>
                            <i class="ri-briefcase-line"></i>
                        </span>
                        <h6>{item.year}</h6>
                       <h5>{item.title}</h5>
                       <p>{item.desc}</p>
                    </div>)
                    }
                </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default Experience
