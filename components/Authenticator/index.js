import React from 'react';
import { useRouter } from 'next/router';
import useVerifyUser from '../../hooks/useVerifyUser';

const Authenticator = ({ children }) => {
    const verifyUser = useVerifyUser();
    const [isReady, setIsReady] = React.useState(false); // Set to FALSE when using authentication component
    const router = useRouter();

    const startVerification = async () => {
        try {
            await verifyUser();
        } catch (err) {
            console.log(err);
        }

        setTimeout(() => {
            setIsReady(true);
        }, 1000);
    }

    // Uncomment if you want to use authentication component, else comment.
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