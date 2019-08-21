import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Sushil Plassar",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" }
      ],
      home: {
        title: "Be relentless",
        subTitle: "Projects making a difference",
        text: "Checkout my other social profiles"
      },
      about: {
        title: "About Me"
      },
      contact: {
        title: "Connect With Me"
      }
    };
  }
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <NavBar className="border-bottom" bg="transparent" expand="lg">
            <NavBar.Brand>Sushil Plassar</NavBar.Brand>
            <NavBar.Toggle className="border=0" aria-controls="navbar-toggle" />
            <NavBar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/">
                  About
                </Link>
                <Link className="nav-link" to="/">
                  Contact
                </Link>
              </Nav>
            </NavBar.Collapse>
          </NavBar>
        </Container>
      </Router>
    );
  }
}

export default App;
