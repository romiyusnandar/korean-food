"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const HomePage = () => {
  const [foodData, setFoodData] = useState([]);
  const [error, setError] = useState(null);
  const [selectedFood, setSelectedFood] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

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

  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(number);
  };

  const handleDetailClick = (food) => {
    setSelectedFood(food);
    setIsModalOpen(true);
    setTimeout(() => {
      setIsModalVisible(true);
    }, 10);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setTimeout(() => {
      setIsModalOpen(false);
      setSelectedFood(null);
    }, 300);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <main className="container mx-auto mt-8 p-4 md:p-0">
        <h1 className="text-3xl font-bold">Selamat Datang di Pencarian Restoran Korea Garut</h1>
        <p className="mt-4 border-b mb-8">Temukan makanan Korea favorit Anda di Garut.</p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {allFoods.length > 0 ? (
            allFoods.map((food, index) => (
              <div key={index} className="border rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                <img src={food.food_img} alt={food.food_name} className="object-cover w-full h-36 rounded-t-lg" />
                <div className="p-4">
                  <div className="p-2">
                    <p className="font-bold">{food.food_name}</p>
                    <p className="text-gray-600">{formatRupiah(food.food_cost)}</p>
                  </div>
                  <button
                    onClick={() => handleDetailClick(food)}
                    className="px-2 py-1 border-2 w-full font-semibold rounded-lg border-green-600 text-black hover:text-white hover:bg-green-600 transition-all duration-300"
                  >
                    Beli
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full">Sedang mengambil data...</p>
          )}
        </div>
      </main>

      {isModalOpen && (
        <div className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 ${isModalVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full transition-transform transform duration-300">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">{selectedFood?.food_name}</h2>
            </div>
            <img src={selectedFood?.food_img} alt={selectedFood?.food_name} className="object-cover w-full h-3/4 rounded-lg mb-4" />
            <p className="font-bold text-lg">Harga: {formatRupiah(selectedFood?.food_cost)}</p>
            <p className="text-gray-600 text-lg">Kategori: {selectedFood?.food_category}</p>
            <p className="text-gray-600 text-lg border-b-2">Toko: {selectedFood?.toko.name}</p>

            <p className="text-center font-semibold">Hubungi</p>

            <div className="flex justify-around">
            {selectedFood?.toko?.contact?.length > 0 && (
              <div className="flex space-x-2 justify-around mt-2">
                {selectedFood.toko.contact[0].whatsapp && (
                  <a
                    href={selectedFood.toko.contact[0].whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-green-500 text-white px-2 rounded-lg hover:bg-green-600 transition-all"
                  >
                    <FaWhatsapp size={25} />
                    <span>Whatsapp</span>
                  </a>
                )}
                {selectedFood.toko.contact[0].instagram && (
                  <a
                    href={selectedFood.toko.contact[0].instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-all"
                  >
                    <FaInstagram size={25} />
                    <span>Instagram</span>
                  </a>
                )}
              </div>
            )}

            </div>

            <button
              onClick={closeModal}
              className="mt-6 w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
