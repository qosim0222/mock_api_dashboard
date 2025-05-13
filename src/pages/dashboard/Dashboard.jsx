import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./style.css";

const Dashboard = () => {
   return (
      <div className="flex">
         <div className="w-[300px] h-screen bg-blue-950 px-[20px] pt-5">
            <h2 className="text-3xl text-amber-50 mb-8">DashStack</h2>
            <ul className="text-2xl text-amber-50">
               <li className="mb-5">
                  <NavLink className="block dash_link rounded-[4px] px-2 py-1 cursor-pointer" end={true} to={""}>
                     All products
                  </NavLink>
               </li>
               <li className="mb-5">
                  <NavLink className="block dash_link rounded-[4px] px-2 py-1 cursor-pointer" to={"create"}>
                     Create
                  </NavLink>
               </li>
            </ul>
         </div>
         <div className="flex-1">
            <Outlet />
         </div>
      </div>
   );
};

export default Dashboard;