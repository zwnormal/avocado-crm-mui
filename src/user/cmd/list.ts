import User from "../domin/user.ts";

export default async function list(): Promise<User[]> {
    const response = await fetch("http://127.0.0.1:3000/api/user/list", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include',
    });
    if (response.ok) {
        return JSON.parse(await response.text());
    } else {
        throw new Error(await response.text());
    }
}
