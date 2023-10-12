import list from "../cmd/list.ts";

export async function userListLoader() {
    const users = await list();
    return { users };
}