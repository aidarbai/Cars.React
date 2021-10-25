import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import CarsTable from "./components/CarsTable";
import Car from "./components/Car";
import Search from "./components/Search";
import Sort from "./components/Sort";

function App() {
  return (
    <>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container className="justify-content-center">
          <Nav activeKey="/Home">
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Contacts</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>

      <Switch>
        <Route exact path="/">
          <Container className="my-container">
            <Row xs={1} md={2}>
              <Col className="mb-3 mb-md-0">
                <Search />
              </Col>
              <Col>
                <Sort />
              </Col>
            </Row>
          </Container>
          <CarsTable />
        </Route>
        <Route exact path="/about">
          <h1>About</h1>
        </Route>
        <Route exact path={"/car/:id"}>
          <Car />
        </Route>
        <Route path="*">
          <h1>404</h1>
        </Route>
      </Switch>
    </>
  );
}

export default App;
