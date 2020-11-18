import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <Container id="footer" style={{
            marginTop: "20px",
            backgroundColor: "#EFC4C4",
            paddingTop: "30px",
            borderRadius: "30px",
        }}>
            <Row>
                <Col md={2} sm={2} className="text-center"><ion-icon name="restaurant-outline"></ion-icon>
                    <p>Restaurant</p>
                </Col>
                <Col md={2} sm={2} className="text-center"><i className="fas fa-glasses fa-4x"></i>
                    <p>Products</p>
                </Col>
                <Col md={4} sm={4}
                    className="text-center"

                >
                    <Image src={require("../../images/star.png").default}
                        height="150" width="150"
                        roundedCircle
                        style={{
                            backgroundColor: "#A56B6B",
                            marginTop: "-80px",
                            position: "relative"
                        }}
                    />
                    <p>Influencers</p>
                </Col>
                <Col md={2} sm={2} className="text-center"><i className="fas fa-shopping-bag fa-4x" />
                    <p>Cart</p>
                </Col>
                <Col md={2} sm={2} className="text-center"><i className="far fa-user fa-4x"></i>
                    <p>Account</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;