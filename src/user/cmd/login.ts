export default async function login (email: string, password: string) {
    const response = await fetch("http://127.0.0.1:3000/api/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password}),
        credentials: 'include',
    });
    if (!response.ok) {
        throw new Error(await response.text());
    }
}
