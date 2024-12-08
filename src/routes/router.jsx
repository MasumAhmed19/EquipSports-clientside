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


const router= createBrowserRouter([
    {
        path:'/',
        element:<Home />
    },{
        path:'/all-sports-equipment',
        element:<AllSportsEquipments />,
        loader:()=>fetch('http://localhost:8080/equipments'),
    },{
        path:'/add-equipment',
        element:<AddEquipments />
    },{
        path:'/update/:id',
        element:<UpdateEquipments />,
        loader:({params})=>fetch(`http://localhost:8080/equipments/${params.id}`),
    },{
        path:'/my-equipments/:email',
        element:<MyEquipments />,
        loader:({params})=>fetch(`http://localhost:8080/my-equipments/${params.email}`)
    },{
        path:'/details/:id',
        element:<Details />,
        loader:({params})=>fetch(`http://localhost:8080/details/${params.id}`),

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