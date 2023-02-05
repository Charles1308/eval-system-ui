import React from 'react';
import { 
	Row, 
	Col, 
	Card, 
	CardBody, 
	CardTitle, 
	ListGroup,
    ListGroupItem
} from 'reactstrap';
import MFOComponent from '../MFO';
import { MFO } from '../../utils/consts';

const IpcrForm = props => {
	const formInfo = {
		title: "IPCR FORM",
		children: <Children onClick={item => props?.onClick?.(item)}/>,
	};

	return (
		<>
			<Col 
				lg="6"
				xl="3" 
				className="mb-sm-2" 
				onClick={() => props?.onClick?.(formInfo)}
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
}

const Children = props => {
	return (
		<>
			<ListGroup>
				{MFO.map((item, index) => (
					<ListGroupItem
						key={index}
						action
						tag="button"
						onClick={() => 
							props?.onClick?.({ 
								title: item.data.title,
								hasSubmit: true,
								children: <MFOComponent type={`MFO${index + 1}`} data={item.data}/>
							})
						}
					>
						{ item.label }
					</ListGroupItem>
				))}
			</ListGroup>
		</>
	);
}

export default IpcrForm;