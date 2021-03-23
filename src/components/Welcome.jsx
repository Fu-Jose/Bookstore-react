import { Jumbotron, Container } from "react-bootstrap";

const Welcome = () => (
  <Jumbotron fluid className="mb-0">
    <Container>
      <h1>The original, the best: Bookstore by React</h1>
      <p>
        Find a book, find a phrase you like, tattoo it on your arm, regret it forever.
      </p>
    </Container>
  </Jumbotron>
);

export default Welcome;
