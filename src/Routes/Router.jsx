import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home";
import RegisterPage from "../Auth/RegisterPage";
import LoginPage from "../Auth/LoginPage";

const router = createBrowserRouter([
    {
        path:"/",
        Component:RootLayout,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:"/register",
                Component:RegisterPage
            },
            {
                path:"login",
                Component:LoginPage
            }
        ]
    }
])

export default router;