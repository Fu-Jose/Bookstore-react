import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import items from "../data/horror.json";
import EllipsisText from "react-ellipsis-text";
class LatestRelease extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          {items.map((item) => (
            <Col key={item.asin} xs={4} sm={4} md={3} lg={2}>
              <Card
                style={{ width: "10rem", height: "27rem" }}
                className="my-3"
              >
                <Card.Img
                  style={{ width: "10rem", height: "15rem" }}
                  variant="top"
                  src={item.img}
                />
                <Card.Body>
                  <Card.Title>
                    <EllipsisText text={item.title} length={20} />
                  </Card.Title>
                  <Card.Text>{item.price} €</Card.Text>
                  <Button
                    style={{
                      position: "absolute",
                      left: "50px",
                      bottom: "20px",
                    }}
                    variant="primary"
                  >
                    BUY!
                  </Button>
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
