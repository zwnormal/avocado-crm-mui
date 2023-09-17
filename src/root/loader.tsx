import {LoaderFunctionArgs, redirect} from "react-router-dom";
import isAuth from "../user/cmd/isAuth.ts";

export function protectedLoader({request}: LoaderFunctionArgs) {
    if (!isAuth()) {
        const params = new URLSearchParams();
        params.set("from", new URL(request.url).pathname);
        return redirect("/login?" + params.toString());
    }
    return null;
}
