


import React from 'react'
import './Contact.css'

import Form from '../form/Form'

import { Container, Row ,Col } from 'reactstrap'

const Contact = () => {
  return <section id='contact'>
    <Container>
        <Row>
            <Col lg='12'>
                <h2 className='getintouch'>Get In Touch</h2>
            </Col>

            <Col lg='6' md='6'>
                <div className="contact__info-container d-flex align-items-center gap-5">
                    <div className="single__info-box w-50">
                        <h6>Address</h6>
                        <p>Thailand, Asian Country</p>
                    </div>

                    <div className="single__info-box w-50">
                        <h6>Phone</h6>
                        <p>+66 8171 47470</p>
                    </div>
                </div>

                <div className="contact__info-container d-flex align-items-center gap-5">
                    <div className="single__info-box w-50">
                        <h6>Email</h6>
                        <p>bossxlp@gmail.com</p>
                    </div>

                    <div className="single__info-box w-50">
                        <h6>Location</h6>
                        <p>Sattahip, Chonburi</p>
                    </div>
                </div>
            </Col>

            <Col lg='6' md='6'>
                <Form/>
            </Col>
        </Row>
    </Container>
  </section>
}

export default Contact
