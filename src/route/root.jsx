import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Agent from "../pages/Agent";
import Weapon from "../pages/Weapon";
import Map from "../pages/Map";


const router = createBrowserRouter([
    
    {
       path:"/",
       element:<Home/>
    },
    {
        path:"Home",
        element:<Home/>
     },
    {
        path:"/Agent",
        element:<Agent/>
    },
    {
        path:"/Weapon",
        element:<Weapon/>
    },
    {
        path:"/Map",
        element:<Map/>
    },
    
])
export default router;