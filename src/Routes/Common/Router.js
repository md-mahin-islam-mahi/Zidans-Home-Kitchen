import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Components/Main/Blog/Blog";
import History from "../../Components/Main/History/History";
import Home from "../../Components/Main/Home/Home";
import Login from "../../Components/Main/Login/Login";
import RateItem from "../../Components/Main/RateItem/RateItem";
import Ratings from "../../Components/Main/Ratings/Ratings";
import AllService from "../../Components/Main/Services/AllService";
import Services from "../../Components/Main/Services/Services";
import Signup from "../../Components/Main/Signup/Signup";
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
                path: "/add-rating/:id",
                loader: ({params}) => fetch(`http://localhost:5000/food-items/${params.id}`),
                element: <RateItem></RateItem>
            },
            {
                path: "/ratings/:id",
                element: <Ratings></Ratings>
            },
            {
                path: "/my-ratings",
                element: <History></History>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/rate-item",
                element: <RateItem></RateItem>
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