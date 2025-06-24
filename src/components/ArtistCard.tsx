import Image from "next/image";

type Artist = {
  name: string;
  category: string[];
  location: string;
  fee: string;
  image?: string;
};

type Props = {
  artist: Artist;
};

export default function ArtistCard({ artist }: Props) {
  return (
    <div className="bg-gray-800 shadow-md rounded p-4 flex flex-col items-center text-center">
      <Image
        src={artist.image || "/default-artist.jpg"} // ✅ fallback image
        alt={artist.name}
        width={300}
        height={192}
        unoptimized
        className="rounded w-full h-48 object-cover"
      />
      <h3 className="mt-4 text-lg font-semibold text-white">{artist.name}</h3>
      <p className="text-sm text-gray-300">{artist.category.join(", ")}</p>
      <p className="text-sm text-gray-400">{artist.location}</p>
      <p className="mt-2 font-medium text-blue-400">{artist.fee}</p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Ask for Quote
      </button>
    </div>
  );
}
