// src/components/ArtistCard.tsx
interface Artist {
  name: string;
  category: string;
  priceRange: string;
  location: string;
  image?: string;
}

export default function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <div className="bg-gray-800 shadow-md rounded p-4 flex flex-col items-center text-center">
      <img
        src={artist.image || "https://via.placeholder.com/150"}
        alt={artist.name}
        className="w-32 h-32 rounded-full object-cover mb-4"
      />
      <h3 className="text-lg font-semibold">{artist.name}</h3>
      <p className="text-sm text-gray-400">{artist.category}</p>
      <p className="text-sm text-gray-600 mt-1">Location: {artist.location}</p>
      <p className="text-sm text-gray-600">Price: {artist.priceRange}</p>
      <button className="mt-3 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
        Ask for Quote
      </button>
    </div>
  );
}
