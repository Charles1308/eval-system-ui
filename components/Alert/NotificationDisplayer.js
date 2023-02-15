import React from 'react';
import { Alert } from 'reactstrap';
import useNotifStore from '@hooks/store/useNotifStore';

const NotificationDisplayer = ({ children }) => {
    const { notifs, clearNotifByOne } = useNotifStore(state => state);

    React.useEffect(() => {
        if (notifs.length) {
            setTimeout(() => clearNotifByOne(), notifs[0]?.timeout || 2000);
        }
    }, [notifs]);

    return (
        <>
            { !!notifs?.length && 
            <div className="p-3" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: 'fit-content', zIndex: '9999' }}>
                <Alert color={notifs[0]?.type}>
                    { notifs[0]?.message }
                </Alert>
            </div>
            } 
            { children }
        </>
    );
}

export default NotificationDisplayer;

