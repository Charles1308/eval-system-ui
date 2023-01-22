import React from 'react';
import verifyUser from '../../modules/verification';
import { useRouter } from 'next/router';

const Authenticator = ({ children }) => {
    const [isReady, setIsReady] = React.useState(false);
    const router = useRouter();

    const startVerification = async () => {
        await verifyUser();

        setTimeout(() => {
            setIsReady(true);
        }, 1000);
    }

    React.useEffect(() => {
        startVerification();

        router.events.on('routeChangeStart', startVerification);
        router.events.on('routeChangeComplete', startVerification);
    }, []);

    React.useEffect(() => {
        console.log(isReady ? "App is ready!" : "App is not ready, probably verifying user.")
    }, [isReady]);

    return <>{ isReady && children }</>
}

export default Authenticator;