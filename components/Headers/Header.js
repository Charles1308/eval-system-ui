import React from "react";
import Link from "next/link";
import IpcrForm from "../CardModals/IpcrForm";
import OpcrForm from "../CardModals/OpcrForm";

// reactstrap components
import { 
  Col, 
  Row, 
  Card, 
  Modal, 
  Button, 
  CardBody, 
  CardTitle, 
  Container, 
  ModalBody, 
  ModalHeader, 
  ModalFooter,
} from "reactstrap";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  const [modalID, setModalID] = React.useState(null);
  const [modal, setModal] = React.useState(null);

  const toggle = (item) => {
    setModal(item);
  }

  return (
    <>
      <div className="header bg-gradient-dark pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              {/* {PORTALS} */}
              <IpcrForm onClick={item => toggle(item)}/>
              <OpcrForm onClick={item => toggle(item)}/>
            </Row>
          </div>
        </Container>
      </div>
      <Modal isOpen={!!modal} toggle={() => toggle(null)} size="xl">
        <ModalHeader toggle={() => toggle(null)}>{ modal?.title }</ModalHeader>
        <ModalBody>
          { modal?.children }
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => toggle(null)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default Header;
