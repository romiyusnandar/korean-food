"use client";

import { useEffect, useState } from "react";

const DetailToko = ({ params: { slug } }) => {
  const [tokoData, setTokoData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/toko/${slug}`);
        if (!response.ok) {
          throw new Error("Toko tidak ditemukan");
        }
        const data = await response.json();
        setTokoData(data);
      } catch (err) {
        console.error("Error mengambil data: ", err);
        setError(err.message);
      }
    };

    fetchData();
  }, [slug]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!tokoData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-8 px-4">
      <div className="flex flex-col items-center">
        <img src={tokoData.img} alt={tokoData.name} className="mb-4 w-40 h-40 md:w-64 md:h-64 object-cover rounded-[50%]" />
        <h1 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-center">{tokoData.name}</h1>
        <p className="text-gray-600 mb-8 text-center">Alamat: {tokoData.address}</p>
      </div>
      <h2 className="text-xl font-semibold mb-4">Makanan & Minuman</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {tokoData.foods.map((item, index) => (
          <div key={index} className="border rounded-lg shadow-lg">
            <img src={item.food_img} alt={item.food_name} className="w-full h-40 object-cover rounded-t-lg mb-2" />
            <div className="p-2">
              <p className="font-semibold">{item.food_name}</p>
              <p>Harga: Rp {item.food_cost}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailToko;
