import Cookies from "universal-cookie";

export default async function login (email: string, password: string) {
    const response = await fetch("http://127.0.0.1:3000/api/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password}),
    });
    if (response.ok) {
        const session = await response.json();
        const cookies = new Cookies(null, { path: '/' });
        cookies.set("session_id", session.session_id);
    } else {
        throw new Error(await response.text())
    }
}
