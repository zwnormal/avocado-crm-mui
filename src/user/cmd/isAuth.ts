export default function isAuth(): boolean {
    return Boolean(localStorage.getItem("session_id"));
}
