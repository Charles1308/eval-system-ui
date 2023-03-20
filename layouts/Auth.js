import React from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import AuthNavbar from "@components/Navbars/AuthNavbar.js";
import AuthFooter from "@components/Footers/AuthFooter.js";

import routes from "routes.js";

function Auth(props) {
  React.useEffect(() => {
    document.body.classList.add("batsu-main-bg-color");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.remove("batsu-main-bg-color");
    };
  }, []);
  return (
    <>
      <div className="main-content">
        <AuthNavbar />
        <div className="header batsu-bg-color py-7 py-lg-8">
          <Container>
            <div className="header-body text-center mb-7">
              <Row className="justify-content-center">
                <Col lg="5" md="6">
                  <h1 className="text-white">Welcome!</h1>
                  <p className="text-lead text-light">
                    Web Based Office & Faculty Evaluation for College of Informatics and Computing Sciences
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="batsu-main-bg-color"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </div>
        {/* Page content */}
        <Container className="mt--8 pb-5">
          <Row className="justify-content-center">{props.children}</Row>
        </Container>
      </div>
      <AuthFooter />
    </>
  );
}

export default Auth;
