import { api } from "@/api";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Create = () => {
   const [name, setName] = useState("");
   const [price, setPrice] = useState("");
   const [color, setColor] = useState("");
   const [desc, setDesc] = useState("");
   const [url, setUrl] = useState("");
   const image = "https://openshop.uz/storage/uploads/products/photos/202505/OYSlmrnve5fS3n0yEyvQaROcIMFvCUC7fWettD9K.jpg";

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
            toast.success("Product created successfully 👌");
            setName("");
            setPrice("");
            setColor("");
            setDesc("");
            setUrl("");
         })
         .catch((err) => {
            toast.error("Something wrong bro 🤷‍♂️");
         })
         .finally();
   };

   return (
      <div className="flex flex-col h-screen justify-between items-center">
         <div className="w-full h-[100px] py-3 text-center text-amber-50 bg-blue-950 border">
            <h1 className="text-3xl">Create product</h1>
         </div>
         <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-full flex-1 pt-5">
            <form className="max-w-md mx-auto space-y-5 px-3 mt-4 w-[500px]" onSubmit={handleSubmit}>
               <div>
                  <label className="mb-2 text-sm text-slate-900 font-medium block">Name</label>
                  <input required value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter name" className="px-4 py-3 bg-gray-100 focus:bg-transparent w-full text-sm text-slate-900 outline-[#333] rounded-sm transition-all" />
               </div>

               <div>
                  <label className="mb-2 text-sm text-slate-900 font-medium block">Price</label>
                  <input required value={price} onChange={(e) => setPrice(e.target.value)} type="number" placeholder="Enter number" className="px-4 py-3 bg-gray-100 focus:bg-transparent w-full text-sm text-slate-900 outline-[#333] rounded-sm transition-all" />
               </div>

               <div>
                  <label className="mb-2 text-sm text-slate-900 font-medium block">Color</label>
                  <input required value={color} onChange={(e) => setColor(e.target.value)} type="text" placeholder="Enter color" className="px-4 py-3 bg-gray-100 focus:bg-transparent w-full text-sm text-slate-900 outline-[#333] rounded-sm transition-all" />
               </div>

               <div>
                  <label className="mb-2 text-sm text-slate-900 font-medium block">Img url</label>
                  <input value={url} onChange={(e) => setUrl(e.target.value)} type="text" placeholder="Enter url" className="px-4 py-3 bg-gray-100 focus:bg-transparent w-full text-sm text-slate-900 outline-[#333] rounded-sm transition-all" />
               </div>

               <div>
                  <label className="mb-2 text-sm text-slate-900 font-medium block">Description</label>
                  <textarea value={desc} onChange={(e) => setDesc(e.target.value)} type="text" placeholder="Enter description" className="px-4 py-3 bg-gray-100 focus:bg-transparent w-full text-sm text-slate-900 outline-[#333] rounded-sm transition-all" />
               </div>

               <button className="!mt-8 px-6 py-2.5 text-sm font-medium bg-[#333] hover:bg-[#222] text-white rounded-sm cursor-pointer">Create</button>
            </form>
         </div>
      </div>
   );
};

export default Create;  