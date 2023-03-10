import React from 'react';
import { 
	Row, 
	Col, 
	Card, 
	CardBody, 
	CardTitle,
} from 'reactstrap';


const IpcrForm = React.forwardRef((props, ref) => {
	// const {
	// 	evaluation: mfoData,
	// 	error,
	// 	isLoading,
	// } = useEvaluation({ 
	// 	type: props?.evaluationData?.[0], 
	// 	id: props?.evaluationData?.[1] 
	// });

	const formInfo = {
		title: "OPCR FORM",
		isMFO: true,
		children: null,
	};

	// React.useEffect(() => {
	// 	if (!isLoading && mfoData && MFO) {
	// 		const { index, type, data } = JSON.parse(mfoData?.ipcr?.payload);
			
	// 		props?.onClick?.({ 
	// 			title: MFO[index]?.label,
	// 			buttonType: 'Update',
	// 			children: (
	// 				<MFOComponent 
	// 					ref={ref}
	// 					type={type} 
	// 					data={{ 
	// 						id: mfoData?.ipcr?.id,
	// 						...MFO[index]?.data, 
	// 						mfoData: data,
	// 						editMode: true,
	// 					}}
	// 				/>
	// 			)
	// 		})
	// 	}
	// }, [mfoData, MFO, isLoading]);

	// React.useEffect(() => {
	// 	if (error) {
	// 	  setNotifs({
	// 		type: 'danger',
	// 		message: error?.message || error || 'Something went wrong!'
	// 	  });
	// 	}
	//   }, [error]);

	return (
		<>
			<Col 
				lg="6"
				xl="3" 
				className="mb-sm-2" 
				onClick={() => props?.onClick?.('MFO1')}
			>
              <Card className="card-stats mb-4 mb-xl-0 portal-card">
                <CardBody>
                  <Row>
                    <div className="col">
                      <CardTitle
                        tag="h5"
                        className="text-uppercase text-muted mb-0"
                      >
                      	{ formInfo.title }
                      </CardTitle>
                    </div>
                    <Col className="col-auto">
						<div className="icon icon-shape bg-warning text-white rounded-circle shadow">
		                    <i className="fas fa-file-invoice" />
		                </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
		</>
	);
})

// const Children = props => {
// 	return (
// 		<>
// 			<ListGroup>
// 				{MFO.map((item, index) => {
// 					const next = index + 2 > MFO.length? null : index + 2;
					
// 					return (
// 						<ListGroupItem
// 							key={index}
// 							action
// 							tag="button"
// 							onClick={() => 
// 								props?.onClick?.({ 
// 									title: item.data.title,
// 									buttonType: 'Submit',
// 									children: <MFOComponent type={`MFO${index + 1}`} next={next} data={item.data}/>
// 								})
// 							}
// 						>
// 							{ item.label }
// 						</ListGroupItem>
// 					)
// 				})}
// 			</ListGroup>
// 		</>
// 	);
// }

export default IpcrForm;