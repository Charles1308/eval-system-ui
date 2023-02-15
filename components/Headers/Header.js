import React from "react";
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

function Header() {
  const { url, payload, method } = useFormRequestStore(state => state);
  const { setNotifs } = useNotifStore(state => state);

  const [modal, setModal] = React.useState(null);
  const [evaluationData, setEvaluationData] = React.useState(null);
  const component = React.useRef(null);
  const printComponent = React.useCallback(() => component.current, [component]);

  const isFormEmpty = _.isEqual(payload, {});

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
		if (isFormEmpty && method === 'POST') {
      setNotifs({ message: "Form is empty", type: "warning" });

      return;
    }
    
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
              <IpcrForm ref={component} evaluationData={evaluationData} onClick={item => toggle(item)}/>
              <OpcrForm evaluationData={evaluationData} onClick={item => toggle(item)}/>
              <IpcrEvaluation onClick={(item, others) => toggle(item, others)}/>
              <OpcrEvaluation onClick={(item, others) => toggle(item, others)}/>
            </Row>
          </div>
        </Container>
      </div>
      <Modal isOpen={!!modal && !!modal?.children} toggle={() => toggle(null)} size="xl">
        <ModalHeader toggle={() => toggle(null)}>{ modal?.title }</ModalHeader>
        <ModalBody>
          { modal?.children }
        </ModalBody>
        <ModalFooter>
          { modalPrimaryButton && (
            <Button color="primary" disabled={isFormEmpty} onClick={modalPrimaryButton.onClick}>
              { modalPrimaryButton.label }
            </Button>
          )}

          {component?.current && (
            <ReactToPrint 
              content={printComponent}
              trigger={() => (
                <Button color="primary">
                  Print
                </Button>
              )}
              removeAfterPrint
            >
              Print
            </ReactToPrint>
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
