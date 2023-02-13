import React from "react";
import uniqid from "uniqid";
import Cookies from 'js-cookie';
import Axios from 'axios';
import useFormRequestStore from "@hooks/store/useFormRequestsStore";
import IpcrForm from "../CardModals/IpcrForm";
import OpcrForm from "../CardModals/OpcrForm";
import IpcrEvaluation from '../CardModals/IpcrEvaluation';
import OpcrEvaluation from '../CardModals/OpcrEvaluation';
import ReactToPrint from 'react-to-print';

// reactstrap components
import { 
  Row, 
  Modal, 
  Button, 
  Container, 
  ModalBody, 
  ModalHeader, 
  ModalFooter,
} from "reactstrap";
import useNotifStore from "@hooks/store/useNotifStore";
import useEvaluation from "@hooks/useEvaluation";

function Header() {
  const { url, payload, method } = useFormRequestStore(state => state);
  const { setNotifs } = useNotifStore(state => state);

  const [modal, setModal] = React.useState(null);
  const [evaluationData, setEvaluationData] = React.useState(null);

  const toggle = (item, others, cb) => {
    if (!item) {
      setEvaluationData(null);
    }

    setModal(item);

    if (others) {
      setEvaluationData(others);
    }

    if (cb) {
      cb();
    }
  }

  const handleForm = async () => {
    await Axios({
      url: url,
      method: method,
      data: {
        payload: payload,
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

  const handlePrint = () => {
    // Print the form
  }

  const modalPrimaryButton = React.useMemo(() => (
    modal?.buttonType
      ? {
          label: modal?.buttonType,
          onClick: handleForm
        }
      : null
  ), [modal?.buttonType, handleForm, toggle]);

  return (
    <>
      <div className="header bg-gradient-dark pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              {/* {PORTALS} */}
              <IpcrForm evaluationData={evaluationData} onClick={item => toggle(item)}/>
              <OpcrForm evaluationData={evaluationData} onClick={item => toggle(item)}/>
              <IpcrEvaluation onClick={(item, others) => toggle(item, others)}/>
              <OpcrEvaluation onClick={(item, others) => toggle(item, others)}/>
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
          { modalPrimaryButton && (
            <Button color="primary" onClick={modalPrimaryButton.onClick}>
              { modalPrimaryButton.label }
            </Button>
          )}

          {modalPrimaryButton?.label === 'Update' && (
            <Button color="warning" onClick={handlePrint}>
              Print
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
