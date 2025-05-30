import { PropertyProps } from "@/interfaces";

export const CAROUSEL_IMAGES: string[] = [
  "/assets/rooms/img-1.png",
  "/assets/rooms/img-2.png",
  "/assets/rooms/img-3.png",
  "/assets/rooms/img-4.png",
  "/assets/rooms/img-5.png",
  "/assets/rooms/img-6.png",
];

export const ROOMS: { id: number; image: string; title: string; description: string }[] = [
  {
    id: 1,
    image: "/assets/rooms/img-1.png",
    title: "Deluxe Room",
    description: "A luxurious room with a king-size bed and a beautiful view.",
  },
  {
    id: 2,
    image: "/assets/rooms/img-2.png",
    title: "Standard Room",
    description: "A cozy and affordable option for budget travelers.",
  },
  {
    id: 3,
    image: "/assets/rooms/img-3.png",
    title: "Executive Suite",
    description: "Spacious room with a work desk, perfect for business travelers.",
  },
  {
    id: 4,
    image: "/assets/rooms/img-4.png",
    title: "Family Room",
    description: "Comfortable space for families with children.",
  },
  {
    id: 5,
    image: "/assets/rooms/img-5.png",
    title: "Honeymoon Suite",
    description: "Romantic room setup for newlyweds and couples.",
  },
  {
    id: 6,
    image: "/assets/rooms/img-6.png",
    title: "Presidential Suite",
    description: "Top-tier suite with premium amenities and VIP service.",
  },
];

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    id: 1,
    name: "Villa Ocean Breeze",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: { bed: "3", shower: "3", occupants: "4-6" },
    image: "/assets/rooms/img-1.png",
    discount: ""
  },
  {
    id: 2,
    name: "Mountain Escape Chalet",
    address: {
      state: "Aspen",
      city: "Colorado",
      country: "USA"
    },
    rating: 4.70,
    category: ["Mountain View", "Fireplace", "Self Check-in"],
    price: 1800,
    offers: { bed: "4", shower: "2", occupants: "5-7" },
    image: "/assets/rooms/img-2.png",
    discount: "30"
  },
  {
    id: 3,
    name: "Cozy Desert Retreat",
    address: {
      state: "Palm Springs",
      city: "California",
      country: "USA"
    },
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Check-in"],
    price: 1500,
    offers: { bed: "2", shower: "1", occupants: "2-3" },
    image: "/assets/rooms/img-3.png",
    discount: ""
  },
  {
    id: 4,
    name: "City Lights Penthouse",
    address: {
      state: "New York",
      city: "New York",
      country: "USA"
    },
    rating: 4.85,
    category: ["City View", "Free WiFi", "24h Check-in"],
    price: 4500,
    offers: { bed: "2", shower: "2", occupants: "2-4" },
    image: "/assets/rooms/img-4.png",
    discount: "15"
  },
  {
    id: 5,
    name: "Riverside Cabin",
    address: {
      state: "Queenstown",
      city: "Otago",
      country: "New Zealand"
    },
    rating: 4.77,
    category: ["Riverside", "Private Dock", "Free Kayaks"],
    price: 2800,
    offers: { bed: "3", shower: "2", occupants: "4-6" },
    image: "/assets/rooms/img-5.png",
    discount: "20"
  },
  {
    id: 6,
    name: "Modern Beachfront Villa",
    address: {
      state: "Sidemen",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.95,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 5000,
    offers: { bed: "5", shower: "4", occupants: "8-10" },
    image: "/assets/rooms/img-6.png",
    discount: ""
  },
  {
    id: 7,
    name: "Lakeside Chalet",
    address: {
      state: "Banff",
      city: "Alberta",
      country: "Canada"
    },
    rating: 4.65,
    category: ["Lakeside", "Mountain View", "Hiking Trails"],
    price: 2300,
    offers: { bed: "3", shower: "3", occupants: "4-5" },
    image: "/assets/rooms/img-7.jpg",
    discount: "10"
  },
  {
    id: 8,
    name: "Tropical Garden Villa",
    address: {
      state: "Koh Samui",
      city: "Surat Thani",
      country: "Thailand"
    },
    rating: 4.80,
    category: ["Garden", "Free Parking", "Self Check-in"],
    price: 2750,
    offers: { bed: "3", shower: "3", occupants: "5-6" },
    image: "/assets/rooms/img-8.jpg",
    discount: "25"
  },
  {
    id: 9,
    name: "Urban Loft",
    address: {
      state: "Berlin",
      city: "Berlin",
      country: "Germany"
    },
    rating: 4.60,
    category: ["City Center", "Free WiFi", "24h Check-in"],
    price: 2000,
    offers: { bed: "2", shower: "1", occupants: "2-3" },
    image: "/assets/rooms/img-9.jpg",
    discount: ""
  },
  {
    id: 10,
    name: "Secluded Forest Cabin",
    address: {
      state: "Whistler",
      city: "British Columbia",
      country: "Canada"
    },
    rating: 4.72,
    category: ["Secluded", "Hot Tub", "Self Check-in"],
    price: 2600,
    offers: { bed: "4", shower: "2", occupants: "5-7" },
    image: "/assets/rooms/img-10.jpg",
    discount: "40"
  },

];
