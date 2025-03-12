import axios from 'axios';
import { useCookies } from 'react-cookie';

export const privateHttp = axios.create({
    // baseURL: 'https://api.example.com',
});

export const publicHttp = axios.create({
    // baseURL: 'https://api.example.com',
});

privateHttp.interceptors.request.use(
    config => {
        const [cookies] = useCookies(['token']);
        const token = cookies.token; // 쿠키에서 토큰 가져오기
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => Promise.reject(error)
);
// const checkTokenExpiry = () => {
//     const [cookies, setCookie, removeCookie] = useCookies(['token']);
//     const token = cookies.token;
//     if (token) {
//         const { exp } = JSON.parse(atob(token.split('.')[1]));
//         if (Date.now() >= exp * 1000) {
//             removeCookie('token'); // 토큰 만료 시 쿠키에서 삭제
//             logoutUser(); // 로그아웃 처리
//         }
//     }
// };
