import React from "react";
import Link from "next/link";
import Axios from 'axios';
import useFormRequestStore from "../../hooks/store/useFormRequestsStore";
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
  const formStore = useFormRequestStore(state => state);

  const router = useRouter();
  const [modal, setModal] = React.useState(null);

  const toggle = (item) => {
    setModal(item);
  }

  const handleSubmit = async () => {
    await Axios({
      url: formStore.url,
      method: formStore.method,
      data: formStore.payload,
    })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
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
          { modal?.hasSubmit && (
            <Button color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          )}
          <Button color="secondary" onClick={() => toggle(null)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default Header;
