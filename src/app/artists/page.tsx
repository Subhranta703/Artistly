import { Suspense } from "react";
import ArtistListingClient from "./ArtistListingClient";

export default function ArtistsPage() {
  return (
    <Suspense fallback={<div className="p-6 text-blue-600">Loading artists...</div>}>
      <ArtistListingClient />
    </Suspense>
  );
}
