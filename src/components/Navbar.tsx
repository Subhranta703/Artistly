// src/components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold text-blue-600">
        Artistly
      </Link>
      <div className="space-x-4">
        <Link href="/artists" className="hover:text-blue-500 text-blue-400">Explore Artists</Link>
        <Link href="/onboard" className="hover:text-blue-500 text-blue-400">Onboard Artist</Link>
        <Link href="/dashboard" className="hover:text-blue-500 text-blue-400">Dashboard</Link>
      </div>
    </nav>
  );
}
