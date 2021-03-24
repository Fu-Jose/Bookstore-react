import { Badge, Card, Col, Container, Row } from "react-bootstrap"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebookSquare, faTwitter, faInstagram, faLinkedin, faCcVisa, faCcPaypal, faCcMastercard, faCcApplePay, faCcAmex, faCcDiscover} from "@fortawesome/free-brands-svg-icons"

const MyFooter = () =>(
    <Card.Footer className="text-muted">
        <Container>
        <Row>
            <Col className="d-flex justify-content-start">
                <p>You can find us on:</p>
                <FontAwesomeIcon className="mr-3 ml-3" icon={faFacebookSquare}/>
                <FontAwesomeIcon className="mr-3" icon={faTwitter}/>
                <FontAwesomeIcon className="mr-3" icon={faInstagram}/>
                <FontAwesomeIcon className="mr-3" icon={faLinkedin}/>
            </Col>
            <Col className="d-flex justify-content-end">
            <p>REACT BOOKSTORE</p>
            <Badge>TM</Badge>
            </Col>
        </Row>
        <Row className="my-3">
            <Col>
                <ul class="list-group">
                    <h5>Business</h5>
                    <li>Discover React!</li>
                    <li>Events</li>
                    <li>Open a franchising</li>
                    <li>Affilations</li>
                    <li>Our Promotions</li>
                    <li>Work with us</li>
                </ul>
            </Col>
            <Col>
                <ul class="list-group">
                    <h5>Our services</h5>
                    <li>Pre-order & pickup</li>
                    <li>APP</li>
                    <li>Gift Cards</li>
                    <li>Special Orders</li>
                    <li>Online collaborations</li>
                    <li>Print online photos</li>
                </ul>
            </Col>
            <Col>
                <ul class="list-group">
                    <h5>Client area</h5>
                    <li>Contact us</li>
                    <li>FAQ</li>
                    <li>Selling conditions</li>
                    <li>Members card</li>
                    <li>Privacy</li>
                    <li>Cookies and navigation data</li>
                </ul>
            </Col>
            <Col>
                <ul class="list-group">
                    <h5>Friend websites</h5>
                    <li>Github</li>
                    <li>React</li>
                    <li>Strive School</li>
                    <li>Bootstrap</li>
                    <li>DuckDuckGo</li>
                </ul>
            </Col>
        </Row>
        <Row className="mx-auto">
            <Col>
            <p>We accept the following payment methods: </p>
            <FontAwesomeIcon className="mr-3 ml-3" icon={faCcVisa}/>
            <FontAwesomeIcon className="mr-3" icon={faCcMastercard}/>
            <FontAwesomeIcon className="mr-3" icon={faCcDiscover}/>
            <FontAwesomeIcon className="mr-3" icon={faCcAmex}/>
            <FontAwesomeIcon className="mr-3" icon={faCcPaypal}/>
            <FontAwesomeIcon className="mr-3" icon={faCcApplePay}/>
            </Col>
        </Row>
        </Container>
    </Card.Footer>
)
export default MyFooter