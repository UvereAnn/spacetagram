import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <div className='footer'>
        <Container>
            <Row>
                <Col className='footer-col'>
                    <p>Spacestagram</p>
                </Col>
                <Col className='footer-col'>
                    <p>Powered by NASA open APIs</p>
                </Col>
            </Row>
        </Container> 
    </div>
  )
}

export default Footer
