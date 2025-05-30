import React from "react";
import Image from "next/image";

interface HeaderProps {
  onShowLogin: () => void;
  onShowSignup: () => void;
}

const Header: React.FC<HeaderProps> = ({ onShowLogin, onShowSignup }) => {
  return (
    <header className="flex flex-col gap-4 p-4 bg-white shadow">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/assets/logo.png"
            alt="ALX Luxury Stay Logo"
            width={50}
            height={50}
            className="rounded-full object-cover"
            priority
          />
          <h1 className="text-xl font-bold whitespace-nowrap">ALX Luxury Stay</h1>
        </div>

        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 border rounded"
          />
          <button
            onClick={onShowLogin}
            className="text-sm hover:underline"
          >
            Sign In
          </button>
          <button
            onClick={onShowSignup}
            className="text-sm hover:underline"
          >
            Sign Up
          </button>
        </div>
      </div>

      <nav className="flex gap-4 text-sm">
        {["Rooms", "Mansion", "Countryside", "Apartments", "Hotels"].map((type) => (
          <button key={type} className="hover:underline">
            {type}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;
