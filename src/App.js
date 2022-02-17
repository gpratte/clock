import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Clock from './game/Clock'
import {Col, Container, Row} from "react-bootstrap";

function App() {
  return (
    <Container fluid>
      <Row className="text-center">
        <Col><Clock/></Col>
      </Row>
    </Container>
  );
}

export default App;
