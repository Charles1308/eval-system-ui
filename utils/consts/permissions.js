const PERMISSIONS = {
    'DEAN': [
        'create-opcr',
        'view-opcr',
        'edit-opcr',
        'print-opcr',
        'view-ipcr',
    ],
    'FACULTY': [
        'create-ipcr',
        'edit-ipcr',
        'view-ipcr',
    ],
    'DEPARTMENT-CHAIRPERSON': [
        'create-ipcr',
        'edit-ipcr',
        'view-ipcr',
        'print-ipcr',
    ],
    'STAFF': [
        'view-ipcr',
        'view-opcr',
        'print-ipcr',
        'print-opcr',
    ]
}

export default PERMISSIONS;