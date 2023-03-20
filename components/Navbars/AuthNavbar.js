import React from "react";
import Link from "next/link";
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

function AdminNavbar() {
  return (
    <>
      <Navbar className="navbar-top navbar-horizontal navbar-dark" expand="md">
        <Container className="px-4">
          <Link href="/">
            <span className="d-flex align-items-center justify-content-center">
              <NavbarBrand href="#pablo" >
                <img
                  alt="..."
                  style={{
                    width: '54px',
                    height: '54px',
                    marginRight: '10px'
                  }}
                  src={require("assets/img/brand/app-logo.png")}
                />
              </NavbarBrand>
              <div style={{ display: 'inline-block' }}>
                <h3 style={{ color: 'rgba(0, 0, 0, 0.6)', padding: '0', margin: '0' }}>
                  Batangas State University
                </h3>
                <small style={{ color: 'rgba(0, 0, 0, 0.5)' }}>The National Engineering University</small>
              </div>
            </span>
          </Link>
          <button className="navbar-toggler" id="navbar-collapse-main">
            <span className="navbar-toggler-icon" />
          </button>
          <UncontrolledCollapse navbar toggler="#navbar-collapse-main">
            <div className="navbar-collapse-header d-md-none">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <Link href="/">
                    <img
                      alt="..."
                      src={require("assets/img/brand/app-logo.png")}
                    />
                  </Link>
                </Col>
                <Col className="collapse-close" xs="6">
                  <button className="navbar-toggler" id="navbar-collapse-main">
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link href="/auth/register">
                  <NavLink href="#pablo" className="nav-link-icon">
                    <i className="ni ni-circle-08" style={{ color: 'rgba(0, 0, 0, 0.5)' }}/>
                    <span className="nav-link-inner--text" style={{ color: 'rgba(0, 0, 0, 0.5)', display: 'inline'}}>Register</span>
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/auth/login">
                  <NavLink href="#pablo" className="nav-link-icon">
                    <i className="ni ni-key-25" style={{ color: 'rgba(0, 0, 0, 0.5)' }}/>
                    <span className="nav-link-inner--text" style={{ color: 'rgba(0, 0, 0, 0.5)', display: 'inline'}}>Login</span>
                  </NavLink>
                </Link>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AdminNavbar;
