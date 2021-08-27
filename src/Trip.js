import React from "react";
import Card from 'react-bootstrap/Card';
import {Col, Container, Row, Table} from "react-bootstrap";


const Trip = () => {



        return (
            <div>
                <h2 className="Header">
                    TripName (tripId)
                </h2>
                <Container fluid>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Info</Card.Title>

                                    <Card.Text>place :</Card.Text>
                                    <Card.Text>description :</Card.Text>
                                    <Card.Text>pricePln :</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Owner</Card.Title>

                                    <Card.Text>name: </Card.Text>
                                    <Card.Text>gender: </Card.Text>
                                    <Card.Text>age: </Card.Text>
                                    <Card.Text>email: </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="Col">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Participants</Card.Title>
                                    <Table size="sm">
                                        <thead>
                                        <tr>
                                            <th>id</th>
                                            <th>name</th>
                                            <th>gender</th>
                                            <th>age</th>
                                            <th>email</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Mark Otto</td>
                                            <td>MALE</td>
                                            <td>27</td>
                                            <td>email@mdo</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Mark Otto</td>
                                            <td>MALE</td>
                                            <td>27</td>
                                            <td>email@mdo</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Mark Otto</td>
                                            <td>MALE</td>
                                            <td>27</td>
                                            <td>email@mdo</td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
;

export default Trip;
