import React from "react";
import PORTALS from "../../utils/consts/headerPortals";
import Link from "next/link";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  const [modalID, setModalID] = React.useState(null);
  const modal = React.useMemo(() => {
    return PORTALS.filter(({ name }) => name === modalID)[0];  
  }, [modalID, PORTALS]);

  const toggle = (item) => () => {
    if (item?.destination) {
      router.push(item.destination)
    } else {
      setModalID(item?.name);
    }
  };

  console.log(modal);

  return (
    <>
      <div className="header bg-gradient-dark pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              {/* {PORTALS} */}
              {PORTALS.map((portal, index) => (
                <Col key={portal.name + index} lg="6" xl="3" className="mb-sm-2" onClick={toggle(portal)}>
                  <Card className="card-stats mb-4 mb-xl-0 portal-card">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            { portal.name }
                          </CardTitle>
                        </div>
                        <Col className="col-auto">
                          { portal.icon }
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>

              ))}
            </Row>
          </div>
        </Container>
      </div>
      <Modal isOpen={!!modal?.children} toggle={toggle()} >
        <ModalHeader toggle={toggle()}>{ modal?.name }</ModalHeader>
        <ModalBody>
          { modal?.children }
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle()}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default Header;
