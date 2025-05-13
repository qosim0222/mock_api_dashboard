import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import Product from "./dashboard/product/Product";
import Create from "./dashboard/create";
import Detail from "./detail/Detail";

const Layout = lazy(() => import("./layout/Layout"));

const MainRouters = () => {
   return (
      <Routes>
         <Route path="/" element={<Layout />}>
            <Route path="/" element={<Dashboard />}>
               <Route path="" element={<Product />} />
               <Route path="create" element={<Create />} />
            </Route>
            <Route path="/product/:id" element={<Detail />} />
         </Route>
      </Routes>
   );
};

export default MainRouters;