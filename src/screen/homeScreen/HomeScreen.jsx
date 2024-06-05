import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Video from "../../components/video/Video"
import CategoriesBar from "../../components/categoriesBar/CategoriesBar"
import "./_homeScreen.scss"

function HomeScreen() {
  return (
    <Container className='homeScreen'>
        <CategoriesBar/>
        <Row>
            {
                [...new Array(30)].map(() => (
                    <Col lg={4} md={6}>
                        <Video />
                    </Col>
                ))
            }
        </Row>
        
    </Container>
  )
}

export default HomeScreen
