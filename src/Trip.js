import React from "react";
import Card from 'react-bootstrap/Card';
import {Col, Container, Row, Table} from "react-bootstrap";
import {gql, useQuery} from "@apollo/client";


const Trip = () => {

        const {loading, error, data} = useQuery(TRIP_QUERY);
        console.log(data)

        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return (
            <div>
                <h2 className="Header">
                    {data.trip.name} ({data.trip.id})
                </h2>
                <Container fluid>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Info</Card.Title>

                                    <Card.Text>place : {data.trip.place}</Card.Text>
                                    <Card.Text>description : {data.trip.description}</Card.Text>
                                    <Card.Text>price : {data.trip.pricePln} zł</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Owner</Card.Title>

                                    <Card.Text>name: {data.trip.owner.firstName} {data.trip.owner.surname}</Card.Text>
                                    <Card.Text>gender: {data.trip.owner.gender.toLowerCase()}</Card.Text>
                                    <Card.Text>age: {data.trip.owner.age}</Card.Text>
                                    <Card.Text>email: {data.trip.owner.email}</Card.Text>

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
                                        {data.trip.participants.map(
                                            participant =>
                                                <tr>
                                                    <td>{participant.id}</td>
                                                    <td>{participant.firstName} {participant.surname}</td>
                                                    <td>{participant.gender}</td>
                                                    <td>{participant.age}</td>
                                                    <td>{participant.email}</td>
                                                </tr>)
                                        }
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

const TRIP_QUERY = gql`
    query Trip {
        trip(id: "1") {
            __typename
            ... on Trip {
                id
                name
                place
                description
                pricePln
                owner {
                    __typename
                    ... on User {
                        firstName
                        surname
                        gender
                        age
                        email
                    }
                }
                participants(limit: 10) {
                    id
                    firstName
                    surname
                    gender
                    age
                    email
                }
            }
            ... on TripNotFound {
                notFoundId: id
            }
        }
    }
`

export default Trip;
