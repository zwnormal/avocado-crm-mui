import {redirect} from "react-router-dom";
import logout from "../user/cmd/logout.ts";

export async function logoutLoader() {
    logout();
    return redirect("/login");
}