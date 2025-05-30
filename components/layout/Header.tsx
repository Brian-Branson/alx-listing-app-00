import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex flex-col gap-4 p-4 bg-white shadow">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">YourLogo</h1>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 border rounded"
          />
          <button className="text-sm">Sign In</button>
          <button className="text-sm">Sign Up</button>
        </div>
      </div>
      <nav className="flex gap-4 text-sm">
        {["Rooms", "Mansion", "Countryside", "Apartments", "Hotels"].map((type) => (
          <button key={type} className="hover:underline">{type}</button>
        ))}
      </nav>
    </header>
  );
};

export default Header;