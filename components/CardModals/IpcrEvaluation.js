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
import useEvaluation from '@hooks/useEvaluation';
import Pagination from '@components/Pagination';

const IpcrEvaluation = props => {
    // const { setNotifs } = useNotifStore(store => store);

	return (
		<>
			<Col 
				lg="6"
				xl="3" 
				className="mb-sm-2" 
				onClick={() => props?.onClick({
                    title: "IPCR EVALUATION",
                    children: <Children onClick={(item, others) => props?.onClick?.(item, others)}/>,
                })}
			>
              <Card className="card-stats mb-4 mb-xl-0 portal-card">
                <CardBody>
                  <Row>
                    <div className="col">
                      <CardTitle
                        tag="h5"
                        className="text-uppercase text-muted mb-0"
                      >
                      	IPCR EVALUATION
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


const Children = ({ onClick }) => {
    const limit = 10;
    const [page, setPage] = React.useState(1);
    const {
		evaluation,
        // error,
        // isLoading,
        // mutate,
	} = useEvaluation({
		type: 'ipcr',
        page: page,
        limit: limit,
	});

	return (
		<>
			<Table bordered>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Creator</th>
                        <th>Roles</th>
                        <th>Course</th>
                        <th>Date Created</th>
                    </tr>
                </thead>
                <tbody>
                    {evaluation?.ipcr?.data?.map?.((item, index) => (
                        <tr key={uniqid()} scope="row" onClick={() => onClick?.(null, ['ipcr', item?.id])}>
                            <th>{ item?.id }</th>
                            <th>{ item?.user?.fullName }</th>
                            <td>{ item?.user?.roles?.map?.(role => role.name)?.join?.(', ') }</td>
                            <td>{ item?.user?.course }</td>
                            <td>{ new Date(item?.created_at)?.toDateString?.() }</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div className="d-flex justify-content-center">
                <Pagination currentPage={page} limit={limit} totalPages={evaluation?.ipcr?.meta?.total} onPageChange={setPage}/>
            </div>
		</>
	);
}

export default IpcrEvaluation;