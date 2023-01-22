import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const LOGIN_PATH = '/auth/login';
const REGISTER_PATH = '/auth/register';

const verifyUser = async () => {
    const pathname = window.location.pathname;
    const token = Cookies.get('token');
    const URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/verify`;
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }

    await axios.get(URL, config)
        .then(() => {
            console.info('Authorized User');
            if (pathname === LOGIN_PATH || pathname === REGISTER_PATH) {
                window.location.href = '/';
            }
        })
        .catch(err => {
            console.error('Unauthorized User');
            if (err?.response) {
                if (err.response.status) {
                    if (pathname === LOGIN_PATH || pathname === REGISTER_PATH) return;

                    window.location.href = LOGIN_PATH;
                }
            }
        });
}

export default verifyUser;