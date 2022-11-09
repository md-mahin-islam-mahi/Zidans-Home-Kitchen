import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Components/Main/Blog/Blog";
import Detail from "../../Components/Main/Detail/Detail";
import History from "../../Components/Main/History/History";
import Home from "../../Components/Main/Home/Home";
import Login from "../../Components/Main/Login/Login";
import AllService from "../../Components/Main/Services/AllService";
import Services from "../../Components/Main/Services/Services";
import Signup from "../../Components/Main/Signup/Signup";
import ReviewItems from "../../Components/ReviewItems/ReviewItems";
import SeeReview from "../../Components/ReviewItems/SeeReview";
import Main from "../../Layouts/Main";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/services",
                element: <Services></Services>
            },
            {
                path: "/all-services",
                element: <AllService></AllService>
            },
            {
                path: "/add-review/:id",
                loader: ({params}) => fetch(`http://localhost:5000/food-items/${params.id}`),
                element: <ReviewItems></ReviewItems>
            },
            {
                path: "/reviews",
                element: <SeeReview></SeeReview>
            },
            {
                path: "/my-ratings",
                element: <History></History>
            },
            {
                path: "/details/:id",
                loader: ({params}) => fetch(`https://zidans-home-kitchen.vercel.app/food-items/${params.id}`),
                element: <Detail></Detail>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <Signup></Signup>
            }
        ]
    }
])