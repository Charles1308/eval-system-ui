import React from "react";
import Cookies from 'js-cookie';
import Axios from 'axios';
import useFormRequestStore from "../../hooks/store/useFormRequestsStore";
import IpcrForm from "../CardModals/IpcrForm";
import OpcrForm from "../CardModals/OpcrForm";
import IpcrEvaluation from '../CardModals/IpcrEvaluation';
import OpcrEvaluation from '../CardModals/OpcrEvaluation';

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
import useNotifStore from "../../hooks/store/useNotifStore";

function Header() {
  const formStore = useFormRequestStore(state => state);
  const { setNotifs } = useNotifStore(state => state);

  const router = useRouter();
  const [modal, setModal] = React.useState(null);

  const toggle = (item) => {
    setModal(item);
  }

  const handleSubmit = async () => {
    await Axios({
      url: formStore.url,
      method: formStore.method,
      data: {
        payload: formStore.payload,
      },
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`
      }
    })
    .then(res => {
      const { message } = res.data;      

      setNotifs({ message });
      toggle(null);
    })
    .catch(err => {
      console.log(err);
      if (err?.response?.data?.message) {
        const { message } = err.response.data;

        setNotifs({ message });
      }
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
              <IpcrEvaluation onClick={item => toggle(item)}/>
              <OpcrEvaluation onClick={item => toggle(item)}/>
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
