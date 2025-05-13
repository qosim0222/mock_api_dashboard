import { api } from "@/api";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Product = () => {
   const [data, setData] = useState(null);
   const [reload, setReload] = useState(false);
   const navigate = useNavigate();

   useEffect(() => {
      api.get("/products").then((res) => {
         setData(res.data);
      });
   }, [reload]);

   const handleDelete = (id) => {
      api.delete(`/products/${id}`)
         .then((res) => {
            toast.success("Deleted");
            setReload((p) => !p);
         })
         .catch()
         .finally();
   };

   return (
      <div className="">
         <div className="w-full h-[100px] py-3 text-center text-amber-50 bg-blue-950 border">
            <h1 className="text-center text-2xl">All products</h1>
         </div>
         <div className="grid grid-cols-5 gap-5 px-10 h-screen overflow-auto">
            {data?.map((prd) => (
               <div key={prd.id} className="flex flex-col text-center rounded-[4px] shadow-2xl shadow-gray-600">
                  <div className="flex-1">
                     <img onClick={() => navigate(`/product/${prd.id}`)} className="rounded-[4px] w-full object-contain" src={prd.image} alt="" />
                  </div>
                  <h2 className="text-2xl"> {prd.name} </h2>
                  <p>{prd.color}</p>
                  <p className="font-bold">${prd.price} USD</p>
                  <div className="p-4">
                     <button onClick={() => handleDelete(prd.id)} className="bg-red-700 rounded-[8px] text-amber-50 px-2 py-1">
                        Delete
                     </button>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Product;