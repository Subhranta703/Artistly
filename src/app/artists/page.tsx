"use client";

import { useSearchParams } from "next/navigation";
import artists from "@/data/artists.json";
import ArtistCard from "@/components/ArtistCard";
import { useEffect, useState } from "react";

export default function ArtistListing() {
  const params = useSearchParams();
  const selectedCategory = params.get("category");
  const [filteredArtists, setFilteredArtists] = useState(artists);

  useEffect(() => {
    if (selectedCategory) {
      setFilteredArtists(
        artists.filter((a) => a.category.includes(selectedCategory))
      );
    } else {
      setFilteredArtists(artists);
    }
  }, [selectedCategory]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4 text-blue-600">
        Explore {selectedCategory || "All"} Artists
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredArtists.map((artist) => (
          <ArtistCard key={artist.name} artist={artist} />
        ))}
      </div>
    </div>
  );
}
