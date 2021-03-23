import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import items from "../data/horror.json";

class LatestRelease extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          {items.map((item) => (
            <Col xs={2}>
            <Card style={{ width: "10rem"}} className="my-3">
              <Card.Img style={{ width: "10rem", height: "15rem" }} variant="top" src={item.img} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.price} €</Card.Text>
                <Button variant="primary">BUY!</Button>
              </Card.Body>
            </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
export default LatestRelease;
