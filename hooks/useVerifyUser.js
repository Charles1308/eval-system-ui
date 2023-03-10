import axios from '@config/axios';
import Cookies from 'js-cookie';
import useUserStore from './store/useUserStore';

const LOGIN_PATH = '/auth/login';
const REGISTER_PATH = '/auth/register';
const ROOT = '/'

const useVerifyUser = () => {
    const setUser = useUserStore(state => state.setUser);

    return async () => {
        const token = await Cookies.get('token');
        const pathname = window?.location?.pathname;
        const URL = '/v1/auth/verify';
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
                roles,
                last_name,
                first_name,
                middle_name,
                fullName,
                password,
            } = res.data;
            console.info('Authorized User');

            setUser('email', email);
            setUser('course', course);
            setUser('roles', roles);
            setUser('fullName', fullName);
            setUser('lastName', last_name);
            setUser('firstName', first_name);
            setUser('middleName', middle_name);
            setUser('password', password);

            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            
            if (pathname === LOGIN_PATH || pathname === REGISTER_PATH || pathname === ROOT) {
                window.location.href = '/admin/dashboard';
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