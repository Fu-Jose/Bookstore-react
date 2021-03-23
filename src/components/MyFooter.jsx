import { Card, Container } from "react-bootstrap"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebookSquare, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons"

const MyFooter = () =>(
    <Card.Footer className="text-muted">
        <Container>
        <FontAwesomeIcon icon={faFacebookSquare}/>
        <FontAwesomeIcon icon={faTwitter}/>
        <FontAwesomeIcon icon={faInstagram}/>
        My Foot
        </Container>
    </Card.Footer>
)
export default MyFooter