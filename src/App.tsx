import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./root/route.tsx";
import Login from "./login/route.tsx";
import {loginLoader} from "./login/loader.tsx";
import {protectedLoader} from "./root/loader.tsx";
import {loginAction} from "./login/action.tsx";
import UserListTable from "./user/list/route.tsx";
import {logoutLoader} from "./logout/loader.tsx";
import {userListLoader} from "./user/list/loader.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        loader: protectedLoader,
        children: [
            {
                path: "/user/list",
                element: <UserListTable />,
                loader: userListLoader,
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
        element: <div/>,
        loader: logoutLoader,
    }
]);

export default function App() {
    return (
        <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
    );
}
