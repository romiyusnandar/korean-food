let data = [
  {
    id: 1,
    name: "Chago Korean BBQ All You Can Eat",
    slug: "chago-korean-bbq-all-you-can-eat",
    img: "/img/chago.jpg",
    address: "Jl. Muara Sanding no. 99",
    contact: [
      { whatsapp: "https://api.whatsapp.com/send?phone=62811230683", instagram: "https://www.instagram.com/chago.id/" }
    ],
    foods: [
      { food_name: "Choco Ajaib", food_cost: 40000, food_img: "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/ea9dccec-ca19-4b36-b6b9-37afdd867bbf_eb3c982d-93f5-4118-9cc1-188de49ce2fd_Go-Biz_20200411_080237.jpeg?auto=format", food_category: "makanan" },
      { food_name: "Chicken Gochujang + minum", food_cost: 18000, food_img: "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/21e7cf9f-278f-4920-8672-ec4df86e1448_bf38b62c-f7bb-4086-b5af-1f4d40c59413_Go-Biz_20200412_092745.jpeg?auto=format", food_category: "minuman" }
    ]
  }
];

// GET (Read all data)
export async function GET(request) {
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

// POST (Create new data)
export async function POST(request) {
  const newToko = await request.json();
  newToko.id = data.length + 1;
  data.push(newToko);

  return new Response(JSON.stringify(newToko), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
