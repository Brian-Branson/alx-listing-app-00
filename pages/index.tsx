'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from '@/components/common/Button';
import LoginModal from '@/components/common/LoginModal';
import SignupModal from '@/components/common/SignupModal';
import ImageCarousel from '@/components/common/ImageCarousel';
import Pill from '@/components/common/Pill';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const filterLabels = [
  { label: 'Free Wi-Fi', value: 'wifi' },
  { label: 'Breakfast Included', value: 'breakfast' },
  { label: 'Pool', value: 'pool' },
  { label: 'Parking', value: 'parking' },
  { label: 'Pet Friendly', value: 'pets' },
  { label: 'Gym', value: 'gym' }
];

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState<string | number>("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  function HeroSection() {
    return (
      <div
        style={{
          backgroundImage: "url('/logo.png')",
          height: "400px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "100px 20px",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
          Find your favorite place here!
        </h1>
        <p style={{ fontSize: "1.25rem", marginTop: "1rem" }}>
          The best prices for over 2 million properties worldwide.
        </p>
      </div>
    );
  }

  return (
    <>
      <Header />

      <main className="relative">
        <HeroSection />

        {showSignup && (
          <SignupModal
            onClose={() => setShowSignup(false)}
            onSwitch={() => {
              setShowSignup(false);
              setShowLogin(true);
            }}
          />
        )}
        {showLogin && (
          <LoginModal
            onClose={() => setShowLogin(false)}
            onSwitch={() => {
              setShowLogin(false);
              setShowSignup(true);
            }}
          />
        )}

        <section className="flex justify-center relative z-10 -mt-[150px]">
          <form className="flex flex-col gap-6 items-center bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
            <h2 className="text-2xl font-semibold mb-4 text-center">Check For Availability</h2>
            <div className="flex gap-8 w-full justify-center">
              <div className="flex flex-col">
                <label className="text-lg font-semibold mb-1">Check-in</label>
                <input type="date" className="w-48 p-2 border rounded" />
              </div>
              <div className="flex flex-col">
                <label className="text-lg font-semibold mb-1">Check-out</label>
                <input type="date" className="w-48 p-2 border rounded" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="adults" className="text-lg font-semibold mb-1">Adults</label>
                <input
                  id="adults"
                  type="number"
                  min={1}
                  max={9}
                  value={adults}
                  onChange={(e) => setAdults(Number(e.target.value))}
                  className="w-32 p-2 border rounded"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="children" className="text-lg font-semibold mb-1">Children</label>
                <input
                  id="children"
                  type="number"
                  min={0}
                  max={9}
                  value={children}
                  onChange={(e) => setChildren(Number(e.target.value))}
                  className="w-32 p-2 border rounded"
                />
              </div>
            </div>
            <div className="mt-6 w-full flex justify-center">
              <Button />
            </div>
          </form>
        </section>

        <section className="py-12 px-8 bg-white">
          <h3 className="text-2xl font-bold text-center mb-6">Filter by Amenities</h3>
          <Pill
            filters={filterLabels}
            selectedValue={selectedFilter}
            onClick={(filter) => setSelectedFilter(filter.value)}
          />
        </section>

        <section id="rooms" className="py-16 px-8 bg-gray-50">
          <h2 className="text-4xl font-bold text-center mb-12">ROOMS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[...Array(6)].map((_, index) => {
              const roomData = [
                {
                  src: "/assets/rooms/img-1.png",
                  title: "Deluxe Room",
                  desc: "A luxurious room with a king-size bed and a beautiful view.",
                },
                {
                  src: "/assets/rooms/img-2.png",
                  title: "Executive Suite",
                  desc: "Spacious suite with a private balcony and city view.",
                },
                {
                  src: "/assets/rooms/img-3.png",
                  title: "Family Room",
                  desc: "Perfect for families, includes 2 queen beds and kids' amenities.",
                },
                {
                  src: "/assets/rooms/img-4.png",
                  title: "Standard Room",
                  desc: "Cozy room with essential amenities and a comfortable bed.",
                },
                {
                  src: "/assets/rooms/img-5.png",
                  title: "Luxury Room",
                  desc: "Elegant room with floor-to-ceiling windows and sea view.",
                },
                {
                  src: "/assets/rooms/img-6.png",
                  title: "Budget Room",
                  desc: "Affordable room option with basic features for quick stays.",
                },
              ];

              const room = roomData[index];
              return (
                <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <Image
                    src={room.src}
                    alt={room.title}
                    width={500}
                    height={300}
                    className="w-full h-63 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2 text-center">{room.title}</h3>
                    <p className="text-gray-700 mb-4 text-center">{room.desc}</p>
                    <Button />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="about" className="py-16 px-8 bg-gray-50">
          <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
          <div className="max-w-4xl mx-auto text-center font-semibold space-y-6">
            <p>Welcome to ALX Luxury Stay, where comfort meets elegance and every guest is treated like royalty.</p>
            <p>Nestled in the heart of the city, our hotel offers a serene escape from the hustle of everyday life.</p>
            <p>From our carefully designed rooms to our very attentive staff, every detail is crafted to make your stay unforgettable.</p>
            <p>Whether you are a business traveler, a family on vacation, or a couple seeking a romantic getaway, our rooms cater to every need and style.</p>
            <p>We take pride in cleanliness, sustainability, and satisfaction—free Wi-Fi, air conditioning, and 24/7 support are standard.</p>
            <p>Experience the warmth and tranquility of ALX Luxury Stay—your home away from home.</p>
          </div>
        </section>

        <section id="contact" className="py-16 px-8 bg-gray-50">
          <Footer />
        </section>
      </main>
    </>
  );
}
