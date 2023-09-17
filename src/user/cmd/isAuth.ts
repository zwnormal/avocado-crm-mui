import Cookies from 'universal-cookie';

export default function isAuth(): boolean {
    const cookies = new Cookies();
    return Boolean(cookies.get("session_id"));
}
