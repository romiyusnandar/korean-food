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
      { food_name: "Chicken Gochujang + minum", food_cost: 18000, food_img: "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/21e7cf9f-278f-4920-8672-ec4df86e1448_bf38b62c-f7bb-4086-b5af-1f4d40c59413_Go-Biz_20200412_092745.jpeg?auto=format", food_category: "minuman" }
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
