import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import AllSportsEquipments from "../pages/AllSportsEquipments";
import AddEquipments from "../pages/AddEquipments";
import MyEquipments from "../pages/MyEquipments";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UpdateEquipments from "../pages/UpdateEquipments";
import Details from "../pages/Details";
import PrivateRoutes from "./PrivateRoutes";


const router= createBrowserRouter([
    {
        path:'/',
        element:<Home />
    },{
        path:'/all-sports-equipment',
        element:<AllSportsEquipments />,
        loader:()=>fetch('https://equipsport-serverside.vercel.app/equipments'),
    },{
        path:'/add-equipment',
        element:<PrivateRoutes><AddEquipments /></PrivateRoutes>
    },{
        path:'/update/:id',
        element:<PrivateRoutes><UpdateEquipments /></PrivateRoutes>,
        loader:({params})=>fetch(`https://equipsport-serverside.vercel.app/equipments/${params.id}`),
    },{
        path:'/my-equipments/:email',
        element:<PrivateRoutes><MyEquipments /></PrivateRoutes>,
        loader:({params})=>fetch(`https://equipsport-serverside.vercel.app/my-equipments/${params.email}`)
    },{
        path:'/details/:id',
        element:<Details />,
        loader:({params})=>fetch(`https://equipsport-serverside.vercel.app/details/${params.id}`),

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