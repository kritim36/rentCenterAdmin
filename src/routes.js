import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";


// Auth Imports


// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  
} from "react-icons/md";
import MyOrders from "views/admin/orders";
import MyProducts from "views/admin/products";
import MyUsers from "views/admin/users";
import Renters from "views/admin/renters";
import AddProduct from "views/admin/products/AddProduct";
import Singleproduct from "views/admin/products/singleProduct";
import SingleOrder from "views/admin/orders/singleOrder";


const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Orders",
    layout: "/admin",
    path: "orders",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <MyOrders />,
    secondary: true,
  },
  {
    name: "Products",
    layout: "/admin",
    path: "products",
    icon: <MdPerson className="h-6 w-6" />,
    component: <MyProducts />,
  },
  {
    name: "Users",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "users",
    component: <MyUsers />,
  },
  {
    name: "Renters",
    layout: "/admin",
    icon: <MdPerson className="h-6 w-6" />,
    path: "renters",
    component: <Renters />,
  },
  {
    name: "Add Product",
    layout: "/admin",
    path: "products/add",
    icon: <MdPerson className="h-6 w-6" />,
    component: <AddProduct />,
  },
  {
    
    layout: "/admin",
    path: "products/:id",
    component: <Singleproduct />,
  },
  {
    layout: "/admin",
    path: "orders/:id",
    component: <SingleOrder />,

  }
 
 
];
export default routes;
