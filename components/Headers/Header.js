import React from "react";
import Cookies from 'js-cookie';
import Axios from 'axios';
import useFormRequestStore from "@hooks/store/useFormRequestsStore";
import IpcrForm from "../CardModals/IpcrForm";
import OpcrForm from "../CardModals/OpcrForm";
import IpcrEvaluation from '../CardModals/IpcrEvaluation';
import OpcrEvaluation from '../CardModals/OpcrEvaluation';

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
  const [evaluationType, setEvaluationType] = React.useState('');
  
  const {
		evaluation,
    error,
    isLoading,
    mutate,
	} = useEvaluation({
		type: evaluationType
	});

  const toggle = (item, others, cb) => {
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

  const modalPrimaryButton = React.useMemo(() => (
    modal?.buttonType
      ? {
          label: modal?.buttonType,
          onClick: handleForm
        }
      : null
  ), [modal?.buttonType, handleForm, toggle]);
  
  React.useEffect(() => {
    if (evaluationType.length) {
      mutate()
      setEvaluationType('');
    }  
  }, [evaluationType]);

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
              <IpcrEvaluation evaluation={evaluation} onClick={(item, others) => toggle(item, others, () => setEvaluationType('ipcr'))}/>
              <OpcrEvaluation evaluation={evaluation} onClick={(item, others) => toggle(item, others, () => setEvaluationType('opcr'))}/>
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
          <Button color="secondary" onClick={() => toggle(null)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default Header;
