import {createBrowserRouter, redirect, RouterProvider} from "react-router-dom";
import Root from "./root/route.tsx";
import Login from "./login/route.tsx";
import {fakeAuthProvider} from "./AuthProvider.ts";
import {loginLoader} from "./login/loader.tsx";
import {protectedLoader} from "./root/loader.tsx";
import {loginAction} from "./login/action.tsx";
import UserListTable from "./user/route.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        loader: protectedLoader,
        children: [
            {
                path: "/user/list",
                element: <UserListTable />
            }
        ]
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
