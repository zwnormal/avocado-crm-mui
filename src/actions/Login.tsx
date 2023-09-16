import {LoaderFunctionArgs, redirect} from "react-router-dom";
import {fakeAuthProvider} from "../AuthProvider.ts";

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

    // Sign in and redirect to the proper destination if successful.
    try {
        await fakeAuthProvider.login(email, password);
    } catch (error) {
        // Unused as of now but this is how you would handle invalid
        // username/password combinations - just like validating the inputs
        // above
        return {
            error: "Invalid login attempt",
        };
    }

    const redirectTo = formData.get("redirectTo") as string | null;
    return redirect(redirectTo || "/");
}
