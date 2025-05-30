

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

export const PROPERTYLISTING_SAMPLE: PropertyProps[] = [
  {
    name: "Villa Ocean Breeze",
    address: { state: "Seminyak", city: "Bali", country: "Indonesia" },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: { bed: "3", shower: "3", occupants: "4-6" },
    image: "https://example.com/image1.jpg",
    discount: "",
  },
  {
    name: "Mountain Escape Chalet",
    address: { state: "Aspen", city: "Colorado", country: "USA" },
    rating: 4.7,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: { bed: "4", shower: "2", occupants: "5-7" },
    image: "https://example.com/image2.jpg",
    discount: "30",
  },
  // ...rest of the 18 properties, unchanged
];
