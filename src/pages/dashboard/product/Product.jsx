import { api } from "@/api";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [data, setData] = useState(null);
  const [reload, setReload] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/product").then((res) => {
      setData(res.data);
    });
  }, [reload]);

  const handleDelete = (id) => {
    api
      .delete(`/product/${id}`)
      .then(() => {
        toast.success("Deleted");
        setReload((prev) => !prev);
      })
      .catch(() => toast.error("Delete failed"));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-8">
      <h1 className="text-3xl font-bold text-center mb-10">Product</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {data?.map((prd) => (
          <div
            key={prd.id}
            className="bg-white rounded-xl shadow-md p-4 relative flex flex-col items-center"
          >
            <div className="w-full h-40 overflow-hidden rounded-xl mb-4">
              <img
                onClick={() => navigate(`/product/${prd.id}`)}
                src={prd.image}
                alt={prd.name}
                className="w-full h-full object-contain cursor-pointer"
              />
            </div>

            <h2 className="text-lg font-semibold">{prd.name}</h2>
            <p className="text-blue-600 font-bold text-sm mb-1">${prd.price}</p>

            <div className="flex items-center gap-1 text-yellow-400 text-sm">
                 <span className="text-gray-400 text-xs">(34)</span>
            </div>

          

            <button
              onClick={() => handleDelete(prd.id)}
              className="mt-2 px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Delete
            </button>

            <div className="absolute top-3 right-3 text-pink-500 text-xl">
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
