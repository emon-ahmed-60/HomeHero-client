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
import NotFound from "../Components/NotFound";
import Spinner from "../Components/Spinner";
import MyServiceCard from "../Components/MyServiceCard";
import ServiceDetails from "../Pages/ServiceDetails";
import ReviewPage from "../Pages/ReviewPage";
import About from "../Pages/About";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import TermsCondition from "../Pages/TermsCondition";
import Blog from "../Pages/Blog";
import Dashboard from "../Layout/DashboardLayout";

const router = createBrowserRouter([
    {
        path:"/",
        Component:RootLayout,
        hydrateFallbackElement:<Spinner/>,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:"/about",
                Component:About
            },
            {
                path:"/register",
                Component:RegisterPage
            },
            {
                path:"/login",
                Component:LoginPage
            },
             {
                path:"/service",
                Component:Services
            },
            {
                path:"/privacy-policy",
                Component:PrivacyPolicy
            },
            {
                path:"/terms-condition",
                Component:TermsCondition
            },
            {
                path:"/blog",
                Component:Blog
            },
            {
                path:"/review-page/:id",
                element:<PrivateRoute> <ReviewPage/> </PrivateRoute>
            },
            {
                path:"/my-service-card/:id",
                element:<PrivateRoute> <MyServiceCard/> </PrivateRoute>
            },
            {
                path:"/service-details/:id",
                element:<ServiceDetails/> 
            },
            {
                path:"*",
                Component:NotFound
            }
        ]
    },
    {
        path:"/dashboard",
        element:<PrivateRoute> <Dashboard/> </PrivateRoute>,
        children:[
            {
                index:true,
                Component:Profile
            },
            {
                path:"/dashboard/my-booking",
                Component: MyBooking
            },
            {
                path:"/dashboard/my-service",
                Component: MyServices
            },
            {
                path:"/dashboard/add-service",
                Component: AddService
            },
            {
                path:"*",
                Component:NotFound
            }
        ]
    }
])

export default router;