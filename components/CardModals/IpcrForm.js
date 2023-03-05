import React from 'react';
import { 
	Row, 
	Col, 
	Card, 
	CardBody, 
	CardTitle,
} from 'reactstrap';

const IpcrForm = React.forwardRef((props, ref) => {
	const formInfo = {
		title: "IPCR FORM",
		isMFO: true,
		children: null,
	};

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

export default IpcrForm;