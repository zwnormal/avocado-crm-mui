import {createBrowserRouter, redirect, RouterProvider} from "react-router-dom";
import Root from "./routes/Root.tsx";
import Login from "./routes/Login.tsx";
import {fakeAuthProvider} from "./AuthProvider.ts";
import {loginLoader} from "./loaders/Login.tsx";
import {protectedLoader} from "./loaders/Root.tsx";
import {loginAction} from "./actions/Login.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        loader: protectedLoader,
    },
    {
        path: "/login",
        element: <Login />,
        action: loginAction,
        loader: loginLoader,
    },
    {
        path: "/logout",
        async action() {
            await fakeAuthProvider.logout();
            return redirect("/login");
        },
    }
]);

export default function App() {
    return (
        <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
    );
}
