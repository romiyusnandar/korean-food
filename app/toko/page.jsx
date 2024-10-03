"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const TokoPage = () => {
  const [tokoData, setTokoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api");
        const data = await response.json();
        setTokoData(data);
      } catch (err) {
        console.error("Error mengambil data: ", err);
      }
    };

    fetchData();
  }, []);

  if (!tokoData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <main className="container mx-auto mt-8 grid grid-cols-2 sm:grid-cols-1 md:grid-cols-4 gap-4 p-4">
        {tokoData.map((toko) => (
          <Link key={toko.id} href={`/toko/${toko.slug}`} className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex flex-col items-center">
              <div className="w-36 h-36 overflow-hidden rounded-[50%]">
                <img
                  src={toko.img}
                  alt={toko.name}
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
              <p className="text-xs md:text-lg font-bold mt-4 text-center">{toko.name}</p>
              <p className="text-gray-600 text-xs md:text-base text-center">{toko.address}</p>
            </div>
          </Link>
        ))}
      </main>
    </>
  );
};

export default TokoPage;
