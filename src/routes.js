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
import AdminLogin from "views/admin/login/Login";

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
    name: "login",
    layout: "/admin",
    path: "login",
    icon: <MdPerson className="h-6 w-6" />,
    component: <AdminLogin />,
  },
 
];
export default routes;