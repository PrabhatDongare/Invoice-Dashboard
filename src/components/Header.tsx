import React from 'react';
import { IoMenu } from 'react-icons/io5';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between bg-[#e7cde7] px-5 py-3">
      {/* Navigation: Back button for mobile */}
      <nav aria-label="Back navigation" className="flex items-center md:hidden">
        <button
          type="button"
          className="flex items-center rounded"
          aria-label="Go back"
        >
          <MdOutlineKeyboardArrowLeft className="text-3xl" aria-hidden="true" />
          <span className="text-lg">Back</span>
        </button>
      </nav>

      {/* Title */}
      <div className="flex items-center gap-1">
        <button
          type="button"
          className="hidden rounded md:inline-block"
          aria-label="Open menu"
        >
          <IoMenu className="text-2xl" aria-hidden="true" />
        </button>
        <h1 className="text-xl font-semibold">Dashboard</h1>
      </div>

      {/* Profile image */}
      <div className="flex items-center">
        <img
          src="/profile-img.png"
          alt="User profile"
          className="h-12 w-12 rounded-full object-cover"
          loading="lazy"
        />
      </div>
    </header>
  );
};

export default Header;
