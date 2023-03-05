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
import useIsAllMFOCompleted from '@hooks/useIsAllMFOCompleted';

// reactstrap components
import { 
  Row, 
  Modal, 
  Button, 
  Container, 
  ModalBody, 
  ModalHeader, 
  ModalFooter,
  Badge,
} from "reactstrap";
import useNotifStore from "@hooks/store/useNotifStore";
import usePermission from "@hooks/usePermission";

function Header() {
  const { url, payloads, method, setPayloads, clearFormStore } = useFormRequestStore(state => state);
  const { setNotifs } = useNotifStore(state => state);
  const hasPermission = usePermission()
  const isAllMFOCompleted = useIsAllMFOCompleted();

  const [modal, setModal] = React.useState(null);
  const [evaluationData, setEvaluationData] = React.useState(null);

  const {
		evaluation: mfoData,
		error,
		isLoading,
	} = useEvaluation({ 
		type: evaluationData?.[0], 
		id: evaluationData?.[1],
	});

  const selectedId = mfoData?.[evaluationData?.[0]]?.id
  const [selectedMFO, setSelectedMFO] = React.useState(null);
  const [formType, setFormType] = React.useState(null);
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

  const toggle = (item, others, cb, _formType) => {
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

    if (_formType) {
      setFormType(_formType);
    }
  }

  const handleForm = async () => {
    if (!isAllMFOCompleted) {
      setNotifs({ message: "All field is required", type: "danger" });

      return;
    }

		if (isFormEmpty && method === 'POST') {
      setNotifs({ message: "Form is empty", type: "danger" });

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
      clearFormStore();
      setEvaluationData();
      setSelectedMFO(null);
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
      if (mfoData?.[formType?.toLowerCase?.()]) {
        const data = JSON.parse(mfoData?.[formType?.toLowerCase?.()]?.payload);
  
        setSelectedMFO('MFO1');
        setPayloads(data);
      }
    }
  }, [mfoData, formType]);

  React.useEffect(() => {
    if (selectedMFO && mfoData) {
      setModal(modal => ({...modal, buttonType: 'Update' }));
    } else if (selectedMFO) {
      setModal(modal => ({...modal, buttonType: 'Submit' }));
    }
  }, [selectedMFO, mfoData])

  const handleSetSelectedMFO = (formType) => (mfo) => {
    setSelectedMFO(mfo);
    setFormType(formType);
  }

  return (
    <>
      <div className="header bg-gradient-dark pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">


            {/* Card stats */}
            <Row>
              {/* {PORTALS} */}
              {hasPermission('create-ipcr') && <IpcrForm onClick={handleSetSelectedMFO('IPCR')}/>}
              {hasPermission('create-opcr') && <OpcrForm onClick={handleSetSelectedMFO('OPCR')}/>}
              {hasPermission('view-ipcr') && <IpcrEvaluation onClick={(item, others) => toggle(item, others, null, 'IPCR')}/>}
              {hasPermission('view-opcr') && <OpcrEvaluation onClick={(item, others) => toggle(item, others, null, 'OPCR')}/>}
            </Row>
          </div>
        </Container>
      </div>
      <Modal 
        isOpen={!!modal || !!selectedMFO} 
        toggle={() => {
          toggle(null);
          clearFormStore();
          setEvaluationData();
          setSelectedMFO(null);
        }}
        size="xl"
      >
        <ModalHeader 
          toggle={() => {
            toggle(null);
            clearFormStore();
            setSelectedMFO(null);
            setEvaluationData();
          }}
        >
          <Badge color="warning" style={{ width: '200px' }}>
            <h3>{(modal && modal?.title) || selectedMFO }</h3>
          </Badge>
        </ModalHeader>
        <ModalBody>
          {modal?.children || 
            <MFOComponent
              type={selectedMFO}
              formType={formType}
              ref={component}
              data={{
                ...MFO.filter(({ key }) => key === selectedMFO)?.[0]?.data,
                id: selectedId,
                mfoData: data?.data,
                editMode: !!selectedId,
              }}
            />
          }
        </ModalBody>
        <ModalFooter>
          {modalPrimaryButton && ((!selectedId && selectedMFO === 'MFO5') || selectedId) && (
            <Button color="primary" onClick={modalPrimaryButton.onClick}>
              { modalPrimaryButton.label }
            </Button>
          )}

          {hasPermission('print-ipcr') && hasPermission('print-opcr') && !!component?.current && !!evaluationData && (
            <ReactToPrint
              content={printComponent}
              trigger={() => (
                <Button color="primary">
                  Print
                </Button>
              )}
              removeAfterPrint
            />
          )}
          {
            (modalPrimaryButton?.label === 'Submit' || modalPrimaryButton?.label === 'Update') && (
              <>
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
              </>
            )
          }
          <Button 
            color="secondary" 
            onClick={() => {
              toggle(null);
              clearFormStore();
              setSelectedMFO(null);
              setEvaluationData();
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
