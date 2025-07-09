export type Review = {
  name: string;
  rating: number;
  comment: string;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  images: string[];
  category: string;
  description: string;
  rating: number;
  reviews: Review[];
};

export const products: Product[] = [
  {
    id: 1,
    title: "Running Shoes",
    price: 99,
    image: "/shoes.png",
    images: ["/shoes.png", "/shoes2.png"],
    category: "Clothing",
    description: "Comfortable running shoes for everyday use.",
    rating: 4.5,
    reviews: [
      { name: "Alice", rating: 5, comment: "Super comfy!" },
      { name: "Bob", rating: 4, comment: "Good value for money." },
    ],
  },
  {
    id: 2,
    title: "Wireless Headphones",
    price: 199,
    image: "/headphones.png",
    images: ["/headphones.png", "/headphones2.png"],
    category: "Electronics",
    description: "High-quality wireless headphones with noise cancellation.",
    rating: 4.7,
    reviews: [
      { name: "Jane", rating: 5, comment: "Amazing sound!" },
      { name: "Tom", rating: 4, comment: "Battery lasts long." },
    ],
  },
  {
    id: 3,
    title: "Backpack",
    price: 129,
    image: "/backpack.png",
    images: ["/backpack.png", "/backpack2.png"],
    category: "Home",
    description: "Durable backpack for travel and daily use.",
    rating: 4.3,
    reviews: [{ name: "Sam", rating: 4, comment: "Very spacious." }],
  },
  {
    id: 4,
    title: "Smartwatch",
    price: 249,
    image: "/smartwatch.png",
    images: ["/smartwatch.png", "/smartwatch2.png"],
    category: "Electronics",
    description: "Feature-rich smartwatch with health tracking.",
    rating: 4.6,
    reviews: [{ name: "Lily", rating: 5, comment: "Tracks everything!" }],
  },
  {
    id: 5,
    title: "Sunglasses",
    price: 149,
    image: "/sunglasses.png",
    images: ["/sunglasses.png", "/sunglasses2.png"],
    category: "Clothing",
    description: "Stylish sunglasses with UV protection.",
    rating: 4.2,
    reviews: [{ name: "Chris", rating: 4, comment: "Looks great!" }],
  },
  {
    id: 6,
    title: "Digital Camera",
    price: 499,
    image: "/camera.png",
    images: ["/camera.png", "/camera2.png"],
    category: "Electronics",
    description: "Capture stunning photos with this digital camera.",
    rating: 4.8,
    reviews: [
      { name: "Alex", rating: 5, comment: "Picture quality is top notch." },
    ],
  },
  {
    id: 7,
    title: "T-shirt",
    price: 29,
    image: "/tshirt.png",
    images: ["/tshirt.png", "/tshirt2.png"],
    category: "Clothing",
    description: "Soft and comfortable cotton t-shirt.",
    rating: 4.1,
    reviews: [{ name: "Mia", rating: 4, comment: "Nice fit." }],
  },
  {
    id: 8,
    title: "Smartphone",
    price: 699,
    image: "/smartphone.png",
    images: ["/smartphone.png", "/smartphone2.png"],
    category: "Electronics",
    description: "Latest smartphone with advanced features.",
    rating: 4.9,
    reviews: [{ name: "Eve", rating: 5, comment: "Best phone I've used." }],
  },
];
