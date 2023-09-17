import {LoaderFunctionArgs, redirect} from "react-router-dom";
import login from "../user/cmd/login.ts";

export async function loginAction({request}: LoaderFunctionArgs) {
    const formData = await request.formData();
    const email = formData.get("email") as string | null;
    const password = formData.get("password") as string | null;

    // Validate our form inputs and return validation errors via useActionData()
    if (!email || !password) {
        return {
            error: "You must provide email and password to log in",
        };
    }

    try {
        await login(email, password);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
        return {
            error: err.message,
        };
    }

    const redirectTo = formData.get("redirectTo") as string | null;
    return redirect(redirectTo || "/");
}
