import React, { Component } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import "./Total.css"
export default class Total extends Component {
    render() {
        return (
            <Container id="total">
                <Row>
                    <Col sm={12}>
                        <Form>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label><b>Add a note</b></Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Let us know any additional request"
                                    resize="none"
                                />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col>Cart Total</Col>
                    <Col className="text-right">5.000 KWD</Col>
                </Row>
                <Row>
                    <Col>Delivery Charges</Col>
                    <Col className="text-right">1.000 KWD</Col>
                </Row>
                <Row>
                    <Col><b>Total</b></Col>
                    <Col className="text-right"><b>6.000 KWD</b></Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <Button id="btn-addmore"><i className="fas fa-plus"></i> Add more</Button>
                    </Col>
                </Row>

                <Row>
                    <Col sm={12} className="text-center">
                        <Button id="btn-checkout">Check Out</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}
