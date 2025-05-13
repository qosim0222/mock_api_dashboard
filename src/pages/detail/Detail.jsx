import { api } from "@/api";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

const Detail = () => {
   const { id } = useParams();
   const [data, setData] = useState();
   const [loading, setLoading] = useState(true);

   useLayoutEffect(() => {
      scrollTo(0, 0);
   }, []);

   useEffect(() => {
      api.get(`/product/${id}`)
         .then((res) => {
            setData(res.data);
         })
         .catch((err) => {
            console.log(err.reponse.data);
         })
         .finally(() => {
            setLoading(false);
         });
   }, []);

   return (
      <div className="container mx-auto grid grid-cols-2 py-6">
         {loading ? (
            <Loading />
         ) : (
            <>
               <div>
                  <div>
                     <img className="w-[400px] h-[400px] object-contain" src={data?.image} alt="" />
                  </div>
                  <div className="flex gap-2">
                     {data?.images?.map((image, i) => (
                        <img onClick={() => setImageId(i)} className="w-16 border" src={image} key={i} alt="" />
                     ))}
                  </div>
               </div>
               <div>
                  <h1 className="text-4xl font-bold">{data?.name}</h1>
                  <h3 className="text-2xl font-bold my-4">$ {data?.price} USD</h3>
                  <h3 className="text-2xl my-4">{data?.color}</h3>
                  <p className="text-gray-500">{data?.description}</p>
               </div>
            </>
         )}
      </div>
   );
};

export default Detail;