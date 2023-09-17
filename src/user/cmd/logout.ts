import Cookies from 'universal-cookie';

export default function logout () {
    const cookies = new Cookies(null, { path: '/' });
    cookies.remove("session_id", { path: '/' });
}
