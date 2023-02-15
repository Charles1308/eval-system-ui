import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import { useRouter } from "next/router";

function UserHeader() {
  const router = useRouter();
  
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          backgroundImage:
            "url(" + require("assets/img/theme/user-2517433_1280.png") + ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="7" md="10">
              <h1 className="display-2 text-white">Profile Page</h1>
              <p className="text-white mt-0 mb-5">
                This is your profile page. You can see information about yourself,
                and you can edit them.
              </p>
              <Button
                color="info"
                href="#pablo"
                onClick={(e) => {
                  e.preventDefault()
                  router.push("/admin/dashboard")
                }}
              >
                {'Back to Dashboard'}
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default UserHeader;
