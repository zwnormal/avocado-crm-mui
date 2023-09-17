export type Result =
    | { type: 'ok'; session_id: string }
    | { type: 'error'; error: Error };

export default function login (email: string, password: string): Result {
    fetch("http://127.0.0.1:3000/api/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password}),
    }).then(response => {
        if (response.ok) {
            return response.json()
        }
        throw new Error(JSON.stringify(response.json()));
    }).then(session => {
        return { type: 'ok', session_id: session.session_id }
    }).catch(function (error) {
        return { type: "error", error }
    });
    return { type: "error", error: new Error("Unreachable code")}
}
