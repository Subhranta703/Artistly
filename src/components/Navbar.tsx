// src/components/Navbar.tsx
"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // You can use other icons if preferred

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow p-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Artistly
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-blue-400">
          <Link href="/artists" className="hover:text-blue-500">Explore Artists</Link>
          <Link href="/onboard" className="hover:text-blue-500">Onboard Artist</Link>
          <Link href="/dashboard" className="hover:text-blue-500">Dashboard</Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 px-4 text-blue-400">
          <Link href="/artists" className="block hover:text-blue-500">Explore Artists</Link>
          <Link href="/onboard" className="block hover:text-blue-500">Onboard Artist</Link>
          <Link href="/dashboard" className="block hover:text-blue-500">Dashboard</Link>
        </div>
      )}
    </nav>
  );
}
