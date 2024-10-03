let data = [
  {
    id: 1,
    name: "Chago Korean BBQ All You Can Eat",
    slug: "chago-korean-bbq-all-you-can-eat",
    img: "https://instagram.fbth9-1.fna.fbcdn.net/v/t39.30808-6/408386920_18019820542936222_9062194967490928400_n.jpg?stp=dst-jpg_e35_s480x480&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgxeDEwNzkuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fbth9-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=pApsJBZt7HUQ7kNvgGQ67V6&_nc_gid=17496da45d4e4fed94ea01898c42e515&edm=AP4sbd4AAAAA&ccb=7-5&ig_cache_key=MzI1MjM0NjM3MjE3OTYwMzk4MQ%3D%3D.3-ccb7-5&oh=00_AYD993Jc7k9Nkj8j1jWUH69_2YVXTcxZKi9O2k8l1802Ig&oe=6703163B&_nc_sid=7a9f4b",
    address: "Jl. Muara Sanding no. 99",
    contact: [
      { whatsapp: "https://api.whatsapp.com/send?phone=62811230683", instagram: "https://www.instagram.com/chago.id/" }
    ],
    foods: [
      { food_name: "Choco Ajaib", food_cost: 40000, food_img: "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/ea9dccec-ca19-4b36-b6b9-37afdd867bbf_eb3c982d-93f5-4118-9cc1-188de49ce2fd_Go-Biz_20200411_080237.jpeg?auto=format", food_category: "makanan" },
      { food_name: "Chicken Gochujang + minum", food_cost: 18000, food_img: "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/21e7cf9f-278f-4920-8672-ec4df86e1448_bf38b62c-f7bb-4086-b5af-1f4d40c59413_Go-Biz_20200412_092745.jpeg?auto=format", food_category: "makanan" },
      { food_name: "Bibimbap + minum", food_cost: 18000, food_img: "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/0d86f7de-b9fc-4a3e-94e2-90089a477afa_23033612-cd71-45aa-a01b-c8bf9b141910_Go-Biz_20200409_215820.jpeg?auto=format", food_category: "makanan" }
    ]
  },
  {
    id: 2,
    name: "JI-WOON KOREA",
    slug: "ji-woon-korea",
    img: "/img/ji-woon.jpg",
    address: "Jl. Merdeka Depan SMA 1 Garut",
    contact: [
      { whatsapp: "", instagram: "https://www.instagram.com/jiwoonkorean.id/" }
    ],
    foods: [
      { food_name: "Clasic Ramyeon", food_cost: 25625, food_img: "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/d462a7ab-dfea-43e1-a28b-cc3b2b09f1cc_1679370947.png?auto=format", food_category: "makanan" },
      { food_name: "Dry Ramyeon Clasic", food_cost: 21875, food_img: "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/ae815643-1976-4cab-86ec-4c69504eab54_eyJ3aWR0aCI6NTEyLCJoZWlnaHQiOjUxMiwia2Jfc2l6ZSI6MjYzLjg4Mn0=.jpeg?auto=format", food_category: "makanan" },
      { food_name: "Kimchi Ramyeon", food_cost: 28125, food_img: "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/d8e8d62b-40dd-41e6-acc2-c201455b5c0e_1679370830.png?auto=format", food_category: "makanan" },
      { food_name: "Bulgogi Ramyeon", food_cost: 41875, food_img: "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/cdae7187-4580-454e-923b-c793b4afe510_eyJ3aWR0aCI6NjM2LCJoZWlnaHQiOjYzNiwia2Jfc2l6ZSI6MjcwLjI5Mn0=.jpeg?auto=format", food_category: "makanan" },
      { food_name: "Creamy Ramyeon", food_cost: 26875, food_img: "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/cc8b0054-1794-458e-97da-ac8f63eaaa4d_Go-Biz_20230910_110608.jpeg?auto=format", food_category: "makanan" }
    ]
  }
];

// GET (Read specific data by slug)
export async function GET(request, { params }) {
  const { slug } = params;
  const toko = data.find((item) => item.slug === slug);

  if (!toko) {
    return new Response(JSON.stringify({ msg: "Toko tidak ditemukan" }), { status: 404 });
  }

  return new Response(JSON.stringify(toko), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
