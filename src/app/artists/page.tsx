"use client";
import artists from "@/data/artists.json";
import { useState } from "react";
import ArtistCard from "@/components/ArtistCard";
import FilterPanel from "@/components/FilterPanel";

export default function ArtistListing() {
  const [filters, setFilters] = useState({ category: "", location: "", price: "" });

const filteredArtists = artists.filter((artist) => {
  return (
    (!filters.category || artist.category.includes(filters.category)) &&
    (!filters.location || artist.location.includes(filters.location)) &&
    (!filters.price || artist.fee === filters.price)
  );
});


  return (
    <div className="p-6 text-blue-900">
      <FilterPanel
        filters={filters}
        onChange={(field, value) => setFilters((prev) => ({ ...prev, [field]: value }))}
      />

      <div className="grid grid-cols-1 text-emerald-600 md:grid-cols-3 gap-4 mt-4">
        {filteredArtists.map((artist) => (
          <ArtistCard key={artist.name} artist={artist} />
        ))}
      </div>
    </div>
  );
}
