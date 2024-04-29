import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyCardFantasy from "./MyCardFantasy";
import MyCardHorror from "./MyCardHorror";
import MyCardHistory from "./MyCardHistory";
import MyCardScifi from "./MyCardScifi";
import MyCardRomance from "./MyCardRomance";

function Home() {
  return (
    <Container>
      <Row xs={1} md={3} lg={5} className="gy-5">
        <Col>
          <MyCardFantasy />
        </Col>
        <Col>
          <MyCardHorror />
        </Col>
        <Col>
          <MyCardHistory />
        </Col>
        <Col>
          <MyCardScifi />
        </Col>
        <Col>
          <MyCardRomance />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
