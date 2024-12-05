import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import AllSportsEquipments from "../pages/AllSportsEquipments";
import AddEquipments from "../pages/AddEquipments";
import MyEquipments from "../pages/MyEquipments";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router= createBrowserRouter([
    {
        path:'/',
        element:<Home />
    },{
        path:'/all-sports-equipment',
        element:<AllSportsEquipments />
    },{
        path:'/add-equipment',
        element:<AddEquipments />
    },{
        path:'/my-equipments',
        element:<MyEquipments />
    },{
        path:'/login',
        element:<Login />
    },{
        path:'/register',
        element:<Register />
    },
    {
        path:'*',
        element:<NotFound />
    }

]);

export default router;