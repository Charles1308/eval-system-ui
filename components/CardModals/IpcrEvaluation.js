import React from 'react';
import uniqid from 'uniqid';
import { 
	Row, 
	Col, 
	Card, 
	Table,
	CardBody, 
	CardTitle,
} from 'reactstrap';
import useNotifStore from '@hooks/store/useNotifStore';

const IpcrEvaluation = props => {
    const { setNotifs } = useNotifStore(store => store);

	const formInfo = React.useMemo(() => ({
		title: "IPCR EVALUATION",
		children: <Children data={props?.evaluation} onClick={(item, others) => props?.onClick?.(item, others)}/>,
	}), [props?.evaluation]);

    // React.useEffect(() => {
    //     if (error) {
    //         setNotifs({
    //             type: "danger",
    //             message: error.message
    //         });
    //     }
    // }, [error]);

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


const Children = ({ data, onClick }) => {
	return (
		<>
			<Table bordered>
                <thead>
                    <tr>
                        <th>
                            Creator
                        </th>
                        <th>
                            Office
                        </th>
                        <th>
                            Course
                        </th>
                        <th>
                            Date Created
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data?.ipcr?.map?.((item, index) => (
                        <tr key={index} scope="row" onClick={() => onClick?.(null, ['ipcr', item?.id])}>
                            <th>{ item?.user?.fullName }</th>
                            <td>{ item?.user?.office }</td>
                            <td>{ item?.user?.course }</td>
                            <td>{ new Date(item?.created_at)?.toDateString?.() }</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
		</>
	);
}

export default IpcrEvaluation;