import {
    ListGroup,
    ListGroupItem
} from 'reactstrap';

const PORTALS = [
    {
        name: "IPCR FORM",
        onClick: null,
        icon: (
            <>
                <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                    <i className="fas fa-file-invoice" />
                </div>
            </>
        ),
        children: <>
            <ListGroup>
                {[
                    { label: "MFO 1 - HIGHER EDUCATION", destination: "/admin/form/ipcr?type=" },
                    { label: "MFO 2 - RESEARCH", destination: "/admin/form/ipcr?type=" },
                    { label: "MFO 3 - RESEARCH", destination: "/admin/form/ipcr?type=" },
                    { label: "MFO 4 - SUPPORT FUNCTION", destination: "/admin/form/ipcr?type=" },
                    { label: "MFO 5 - ADMIN FUNCTION", destination: "/admin/form/ipcr?type=" },
                ].map((item, index) => (
                    <ListGroupItem
                        key={index}
                        action
                        tag="a"
                        href={item.destination}
                    >
                        { item.label }
                    </ListGroupItem>
                ))}
            </ListGroup>
        </>
    },
    {
        name: "OPCR FORM",
        onClick: null,
        icon: (
            <>
                <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                    <i className="fas fa-file-invoice" />
                </div>
            </>
        ),
        children: <>
            <ListGroup>
                {[
                    { label: "HIGHER EDUCATION", destination: "/admin/form/opcr?type=" },
                    { label: "RESEARCH", destination: "/admin/form/opcr?type=" },
                    { label: "ADMINISTRATIVE / SUPPORT FUNCTIONS", destination: "/admin/form/opcr?type=" },
                    { label: "OTHER ADMINISTRATIVE FUNCTIONS", destination: "/admin/form/opcr?type=" },
                    { label: "EXTENSIVE SERVICES", destination: "/admin/form/opcr?type=" },
                ].map((item, index) => (
                    <ListGroupItem
                        key={index}
                        action
                        tag="a"
                        href={item.destination}
                    >
                        { item.label }
                    </ListGroupItem>
                ))}
            </ListGroup>
        </>
    },
    {
        name: "IPCR EVALUATION",
        destination: "/admin/evaluation/ipcr",
        onClick: null,
        icon: (
            <>
                <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                    <i className="fas fa-file-contract" />
                </div>
            </>
        ),
    },
    {
        name: "OPCR EVALUATION",
        destination: "/admin/evaluation/opcr",
        onClick: null,
        icon: (
            <>
                <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                    <i className="fas fa-file-contract" />
                </div>
            </>
        ),
    },
    {
        name: "INSTRUCTORS WHO SUBMITTED",
        destination: "/admin/instructors-who-submitted",
        onClick: null,
        icon: (
            <>
                <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                    <i className="fas fa-users" />
                </div>
            </>
        ),
    },
    {
        name: "VIEW & PRINT",
        destination: "/admin/view-and-print",
        onClick: null,
        icon: (
            <>
                <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                    <i className="fas fa-print"></i>
                </div>
            </>
        ),
    },
];

export default PORTALS;
