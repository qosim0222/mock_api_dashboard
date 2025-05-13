import { api } from "@/api";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Create = () => {
   const [name, setName] = useState("");
   const [price, setPrice] = useState("");
   const [color, setColor] = useState("");
   const [desc, setDesc] = useState("");
   const [url, setUrl] = useState("");
   const image = "";

   const handleSubmit = (e) => {
      e.preventDefault();
      const newPrd = {
         name,
         price: +price,
         color,
         description: desc,
         image: url.startsWith("https://") ? url : image,
      };

      api.post("/product", newPrd)
         .then((res) => {
            toast.success("Product created successfully ");
            setName("");
            setPrice("");
            setDesc("");
            setUrl("");
         })
         .catch((err) => {
            toast.error("Something wrong ");
         })
         .finally();
   };

   return (
      <div className="flex flex-col h-screen justify-between items-center bg-gray-50">
         <div className="w-full h-[120px] py-3 text-center ">
            <h1 className="text-4xl font-semibold">Create Product</h1>
         </div>
         <div className="shadow-lg bg-white rounded-lg w-full flex-1 pt-5">
            <form className="max-w-md mx-auto space-y-6 px-5 mt-6 w-[500px]" onSubmit={handleSubmit}>
               <div>
                  <label className="mb-2 text-sm text-gray-700 font-medium block">Name</label>
                  <input
                     required
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                     type="text"
                     placeholder="Enter product name"
                     className="px-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                  />
               </div>


               <div>
                  <label className="mb-2 text-sm text-gray-700 font-medium block">Image URL</label>
                  <input
                     value={url}
                     onChange={(e) => setUrl(e.target.value)}
                     type="text"
                     placeholder="Enter image URL"
                     className="px-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                  />
               </div>

               <div>
                  <label className="mb-2 text-sm text-gray-700 font-medium block">Description</label>
                  <textarea
                     value={desc}
                     onChange={(e) => setDesc(e.target.value)}
                     placeholder="Enter description"
                     className="px-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                  />
               </div>

               <button className="mt-6 px-6 py-3 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg w-full transition-all ease-in-out duration-300">
                  Create
               </button>
            </form>
         </div>
      </div>
   );
};

export default Create;
