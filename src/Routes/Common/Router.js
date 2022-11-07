import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Components/Main/Blog/Blog";
import History from "../../Components/Main/History/History";
import Home from "../../Components/Main/Home/Home";
import Login from "../../Components/Main/Login/Login";
import Ratings from "../../Components/Main/Ratings/Ratings";
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