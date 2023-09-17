import {redirect} from "react-router-dom";
import isAuth from "../user/cmd/isAuth.ts";

export async function loginLoader() {
    if (isAuth()) {
        return redirect("/");
    }
    return null;
}
