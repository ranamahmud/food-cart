import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import "./CartItems.css"
const CartItems = () => {
    return (
        <Container>
            <Row>
                <Col sm={4}> <Image src={require('../../images/sandwitch1.jpg').default} thumbnail /></Col>
                <Col sm={8}>
                    <Row sm={8}>Chicken Grill Sandwitch</Row>
                    <Row>
                        <Col sm={4}><i className="fab fa-gripfire"></i>1002 Cal</Col>
                        <Col sm={4}>1.500 KWD</Col>
                    </Row>
                    <Row>
                        <Col sm={{ span: 6, offset: 2 }}>
                            <Button><i className="fas fa-minus"></i></Button>
                            <span className="counter">1</span>
                            <Button><i className="fas fa-plus"></i></Button>
                        </Col>
                    </Row>

                </Col>
            </Row>

        </Container>
    );
};

export default CartItems;