const PERMISSIONS = {
    'DEAN': [
        'create-opcr',
        'view-opcr',
    ],
    'FACULTY': [
        'create-ipcr',
        'view-ipcr',
        'create-opcr',
        'view-opcr',
    ],
    'DEPARTMENT-CHAIRPERSON': [
        'create-ipcr',
        'view-ipcr',
        'view-opcr',
        'print-ipcr',
        'print-opcr',
    ],
    'STAFF': [
        'print-ipcr',
        'print-opcr',
    ]
}

export default PERMISSIONS;