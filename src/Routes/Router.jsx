import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home";
import RegisterPage from "../Auth/RegisterPage";
import LoginPage from "../Auth/LoginPage";
import Services from "../Pages/Services";
import Profile from "../Pages/Profile";
import PrivateRoute from "./PrivateRoute";
import MyServices from "../Pages/MyServices";
import AddService from "../Pages/AddService";
import MyBooking from "../Pages/MyBooking";

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
            },
             {
                path:"/service",
                Component:Services
            },
            {
                path:"/profile",
                element:<PrivateRoute> <Profile/> </PrivateRoute>
            },
            {
                path:"/my-service",
                element:<PrivateRoute> <MyServices/> </PrivateRoute>
            },
            {
                path:"/add-service",
                element:<PrivateRoute> <AddService/> </PrivateRoute>
            },
            {
                path:"/my-booking",
                element:<PrivateRoute> <MyBooking/> </PrivateRoute>
            }
        ]
    }
])

export default router;