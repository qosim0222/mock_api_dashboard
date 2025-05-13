import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./style.css";

const Dashboard = () => {
   return (
      <div className="flex min-h-screen">
         
         <div className="w-[300px] bg-gradient-to-b bg-cyan-600  px-[20px] pt-5 shadow-lg">
            <h2 className="text-4xl text-amber-50 mb-8 font-semibold">Dashboard</h2>
            <ul className="text-2xl text-amber-50">
               <li className="mb-6">
                  <NavLink
                     className="block dash_link rounded-[6px] px-4 py-2 cursor-pointer transition-all duration-300 hover:bg-blue-400"
                     end={true}
                     to={""}
                  >
                     Products
                  </NavLink>
               </li>
               <li className="mb-6">
                  <NavLink
                     className="block dash_link rounded-[6px] px-4 py-2 cursor-pointer transition-all duration-300 hover:bg-blue-400"
                     to={"create"}
                  >
                     Create
                  </NavLink>
               </li>
            </ul>
         </div>

         <div className="flex-1 p-6 bg-gray-50">
            <Outlet />
         </div>
      </div>
   );
};

export default Dashboard;
