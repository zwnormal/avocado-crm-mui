import Cookies from 'universal-cookie';

export default async function logout () {
    await fetch("http://127.0.0.1:3000/api/user/logout", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: 'include',
    });
    const cookies = new Cookies(null, { path: '/' });
    cookies.remove("session_id", { path: '/' });
}
