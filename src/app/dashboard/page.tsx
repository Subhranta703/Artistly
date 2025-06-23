"use client";

import { useEffect, useState } from "react";

interface Artist {
  name: string;
  category: string[];
  location: string;
  fee: string;
  image?: string;
}

export default function DashboardPage() {
  const [submissions, setSubmissions] = useState<Artist[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("artistSubmissions");
    if (stored) {
      setSubmissions(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Manager Dashboard</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border rounded shadow text-sm">
          <thead className="bg-gray-100">
  <tr>
    <th className="p-3 text-left">Image</th>
    <th className="p-3 text-left">Name</th>
    <th className="p-3 text-left">Category</th>
    <th className="p-3 text-left">Location</th>
    <th className="p-3 text-left">Fee</th>
    <th className="p-3 text-left">Action</th>
  </tr>
</thead>

          <tbody>
            {submissions.map((artist, index) => (
             <tr key={index} className="border-t">
  <td className="p-3">
    {artist.image ? (
      <img src={artist.image} alt={artist.name} className="w-14 h-14 rounded-full object-cover" />
    ) : (
      <div className="w-14 h-14 bg-gray-200 rounded-full" />
    )}
  </td>
  <td className="p-3">{artist.name}</td>
  <td className="p-3">{artist.category?.join(", ")}</td>
  <td className="p-3">{artist.location}</td>
  <td className="p-3">{artist.fee}</td>
  <td className="p-3">
    <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
      View
    </button>
  </td>
</tr>

            ))}
            {submissions.length === 0 && (
              <tr>
                <td colSpan={5} className="p-4 text-center text-gray-400">
                  No submissions yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
