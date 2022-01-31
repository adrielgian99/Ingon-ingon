import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import { connect } from "react-redux";
import { logoutUser } from "../redux/actions/user";

class MyNavbar extends React.Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Ingon-ingon</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
              <Nav>
                {this.props.userGlobal.username ? (
                  <>
                    <Navbar.Text>
                      Hello, {this.props.userGlobal.username}
                      {""}
                    </Navbar.Text>
                    <NavDropdown title="Pages" id="collasible-nav-dropdown">
                      <NavDropdown.Item href="/cart">Cart</NavDropdown.Item>
                      <NavDropdown.Item href="/history">
                        History
                      </NavDropdown.Item>
                      {this.props.userGlobal.role === "admin" ? (
                        <NavDropdown.Item href="/admin">Admin</NavDropdown.Item>
                      ) : null}
                      <NavDropdown.Divider />
                      <NavDropdown.Item onClick={this.props.logoutUser}>
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  </>
                ) : (
                  <>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userGlobal: state.user,
  };
};

const mapDispatchToProps = {
  logoutUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(MyNavbar);
