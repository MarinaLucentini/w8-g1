import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./MyNav";
import Welcome from "./Welcome";
import MyFooter from "./MyFooter";
import MyBookList from "./MyBookList";
import { Col, Container, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";
import { Component } from "react";
// import Home from "./Home";

class App extends Component {
  state = {
    elementId: "",
  };
  elementIdNew = (asin) => {
    this.setState({ elementId: asin });
  };
  render() {
    return (
      <div className="App" data-bs-theme="dark">
        <header className="App-header">
          <MyNav />
        </header>
        <main className="mx-3">
          <Welcome />
          <Container>
            <Row>
              <Col>
                <MyBookList
                  elementIdNew={this.elementIdNew}
                  elementId={this.state.elementId}
                />
              </Col>
              <Col>
                <CommentArea
                  elementId={this.state.elementId}
                />
              </Col>
            </Row>
          </Container>
        </main>
        <MyFooter />
      </div>
    );
  }
}

export default App;
