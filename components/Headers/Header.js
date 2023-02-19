import React from "react";
import Cookies from 'js-cookie';
import Axios from 'axios';
import useFormRequestStore from "@hooks/store/useFormRequestsStore";
import IpcrForm from "../CardModals/IpcrForm";
import OpcrForm from "../CardModals/OpcrForm";
import IpcrEvaluation from '../CardModals/IpcrEvaluation';
import OpcrEvaluation from '../CardModals/OpcrEvaluation';
import ReactToPrint from 'react-to-print';
import { MFO } from "@utils/consts";
import MFOComponent from "@components/MFO";
import useEvaluation from '@hooks/useEvaluation';

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
  const { url, payloads, method, setPayloads, clearFormStore } = useFormRequestStore(state => state);
  const { setNotifs } = useNotifStore(state => state);

  const [modal, setModal] = React.useState(null);
  const [evaluationData, setEvaluationData] = React.useState(null);

  const {
		evaluation: mfoData,
		error,
		isLoading,
	} = useEvaluation({ 
		type: evaluationData?.[0], 
		id: evaluationData?.[1] 
	});

  const selectedId = mfoData?.[evaluationData?.[0]]?.id
  const [selectedMFO, setSelectedMFO] = React.useState(null);
  const dataIndex = payloads.findIndex(({ type }) => type === selectedMFO);
  const data = payloads?.[dataIndex];

  const component = React.useRef(null);
  const printComponent = React.useCallback(() => component.current, [component]);

	const handleNextOrPrevPage = (move = 'next') => {
		let mfoNumber = Number(selectedMFO[selectedMFO.length - 1]);
    if (move === 'next') {
      if (mfoNumber + 1 <= 5) {
        mfoNumber += 1;
      }
    } else {
      if (mfoNumber - 1 >= 1) {
        mfoNumber -= 1;
      }
    }

    const mfo = `MFO${mfoNumber}`;
		setSelectedMFO(mfo);
	}

  const isFormEmpty = _.isEmpty(payloads);

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
        payload: payloads,
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
    if (mfoData) {
      const data = JSON.parse(mfoData?.ipcr?.payload);

      setSelectedMFO('MFO1');
      setPayloads(data);
    }
  }, [mfoData]);

  return (
    <>
      <div className="header bg-gradient-dark pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              {/* {PORTALS} */}
              <IpcrForm onClick={setSelectedMFO}/>
              <OpcrForm onClick={setSelectedMFO}/>
              <IpcrEvaluation onClick={(item, others) => toggle(item, others)}/>
              <OpcrEvaluation onClick={(item, others) => toggle(item, others)}/>
            </Row>
          </div>
        </Container>
      </div>
      <Modal 
        isOpen={!!modal || !!selectedMFO} 
        toggle={() => {
          toggle(null);
          clearFormStore();
          setEvaluationData([]);
          setSelectedMFO(null);
        }}
        size="xl"
      >
        <ModalHeader 
          toggle={() => {
            toggle(null);
            clearFormStore();
            setSelectedMFO(null);
            setEvaluationData([]);
          }}>
          { modal ? modal?.title : selectedMFO }
        </ModalHeader>
        <ModalBody>
          {modal?.children || 
            <MFOComponent
              type={selectedMFO}
              ref={component}
              data={{
                ...MFO.filter(({ key }) => key === selectedMFO)?.[0]?.data,
                id: selectedId,
                mfoData: data?.data,
                editMode: !!data,
              }}
            />
          }
        </ModalBody>
        <ModalFooter>
          {modalPrimaryButton && (
            <Button color="primary" disabled={isFormEmpty} onClick={modalPrimaryButton.onClick}>
              { modalPrimaryButton.label }
            </Button>
          )}

          {!!component?.current && !!evaluationData.length && (
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
          {selectedMFO && (
            <Button color="secondary" disabled={selectedMFO === 'MFO1'} onClick={() => handleNextOrPrevPage('previous')}>
              Previous MFO
            </Button>
          )}
          {selectedMFO && (
            <Button color="secondary" disabled={selectedMFO === 'MFO5'} onClick={() => handleNextOrPrevPage()}>
              Next MFO
            </Button>
          )}
          <Button 
            color="secondary" 
            onClick={() => {
              toggle(null);
              clearFormStore();
              setSelectedMFO(null);
              setEvaluationData([]);
            }}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}


export default Header;
