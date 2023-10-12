export default async function logout () {
    await fetch("http://127.0.0.1:3000/api/user/logout", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("session_id")}`
        },
    });
    localStorage.removeItem("session_id");
}
