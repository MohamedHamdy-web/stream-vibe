"use client";

import { useState } from "react";
import Link from "next/link";
import {
  IoSearchOutline,
  IoNotificationsOutline,
  IoMenuOutline,
  IoCloseOutline,
} from "react-icons/io5";
import { BiCameraMovie } from "react-icons/bi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-8 py-4 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <BiCameraMovie size={36} className="text-sv_red" />
        <span className="text-xl font-bold tracking-wide">StreamVibe</span>
      </Link>

      {/* Nav Links */}
      <nav className="hidden md:flex items-center px-2 py-1.5 bg-sv_bg rounded border-2 border-sv_border">
        {["Home", "Movies & Shows", "Support", "Subscriptions"].map((item) => (
          <Link
            key={item}
            href="/"
            className={`px-5 py-1.5 text-sm font-medium transition-colors  ${
              item === "Home"
                ? "bg-sv_border text-white"
                : "text-white/60 hover:text-white"
            }`}
          >
            {item}
          </Link>
        ))}
      </nav>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setSearchOpen(!searchOpen)}
          className="text-white/60 hover:text-white transition-colors"
        >
          <IoSearchOutline size={22} />
        </button>
        <button className="text-white/60 hover:text-white transition-colors">
          <IoNotificationsOutline size={22} />
        </button>
        <div className="w-9 h-9 rounded-full bg-sv_red flex items-center justify-center text-sm font-bold cursor-pointer">
          U
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white/60 hover:text-white transition-colors"
        >
          {menuOpen ? (
            <IoCloseOutline size={26} />
          ) : (
            <IoMenuOutline size={26} />
          )}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
