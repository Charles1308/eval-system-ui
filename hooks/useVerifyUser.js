import axios from 'axios';
import Cookies from 'js-cookie';
import useUserStore from './store/useUserStore';

const LOGIN_PATH = '/auth/login';
const REGISTER_PATH = '/auth/register';

const useVerifyUser = () => {
    const setUser = useUserStore(state => state.setUser);

    return async () => {
        const token = await Cookies.get('token');
        const pathname = window?.location?.pathname;
        const URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/verify`;
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

        return await axios.get(URL, config)
        .then((res) => {
            const {
                email,
                course,
                office,
                last_name,
                first_name,
                middle_name,
            } = res.data;
            console.info('Authorized User');

            setUser('email', email);
            setUser('course', course);
            setUser('office', office);
            setUser('lastName', last_name);
            setUser('firstName', first_name);
            setUser('middleName', middle_name);

            if (pathname === LOGIN_PATH || pathname === REGISTER_PATH) {
                window.location.href = '/';
            }
        })
        .catch(err => {
            console.log(err);
            console.error('Unauthorized User');
            if (err?.response) {
                if (err.response.status) {
                    if (pathname === LOGIN_PATH || pathname === REGISTER_PATH) return;

                    window.location.href = LOGIN_PATH;
                }
            }
        });
    }
}

export default useVerifyUser;