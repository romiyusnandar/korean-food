"use client";

import { useEffect, useState } from "react";

const HomePage = () => {
  const [foodData, setFoodData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api");
        const data = await response.json();
        setFoodData(data);
      } catch (err) {
        console.error("Error mengambil data: ", err);
        setError("Terjadi kesalahan saat mengambil data.");
      }
    };

    fetchData();
  }, []);

  const allFoods = Array.isArray(foodData) ? foodData.flatMap((toko) => toko.foods.map(food => ({ ...food, toko }))) : [];

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <main className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold">Selamat Datang di Pencarian Restoran Korea Garut</h1>
        <p className="mt-4 border-b mb-8">Temukan makanan Korea favorit Anda di Garut.</p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {allFoods.length > 0 ? (
            allFoods.map((food, index) => (
              <div key={index} className="border rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img src={food.food_img} alt={food.food_name} className="object-cover w-full h-36 rounded-t-lg" />
                <div className="p-2">
                  <p className="font-bold">{food.food_name}</p>
                  <p className="text-gray-600">Harga: Rp. {food.food_cost}</p>
                  <div className="mt-2 flex-row gap-x-2 items-center hidden md:inline-flex">
                    <img src={food.toko.img} alt={food.toko.name} className="object-cover w-8 h-8 md:w-10 md:h-10 rounded-full" />
                    <p className="text-gray-600">{food.toko.name}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full">Sedang mengambil data...</p>
          )}
        </div>
      </main>
    </>
  );
};

export default HomePage;
