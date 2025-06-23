// src/components/FilterPanel.tsx
interface FilterProps {
  filters: {
    category: string;
    location: string;
    price: string;
  };
  setFilters: (filters: any) => void;
}

export default function FilterPanel({ filters, setFilters }: FilterProps) {
  return (
    <div className="bg-white p-4 rounded shadow-md flex flex-wrap gap-4 items-center">
      <input
        type="text"
        placeholder="Search by location"
        value={filters.location}
        onChange={(e) => setFilters({ ...filters, location: e.target.value })}
        className="border px-3 py-2 rounded w-48"
      />
      <select
        value={filters.category}
        onChange={(e) => setFilters({ ...filters, category: e.target.value })}
        className="border px-3 py-2 rounded w-48"
      >
        <option value="">All Categories</option>
        <option value="Singer">Singer</option>
        <option value="Dancer">Dancer</option>
        <option value="DJ">DJ</option>
        <option value="Speaker">Speaker</option>
      </select>
      <select
        value={filters.price}
        onChange={(e) => setFilters({ ...filters, price: e.target.value })}
        className="border px-3 py-2 rounded w-48"
      >
        <option value="">All Price Ranges</option>
        <option value="₹5k-₹10k">₹5k–₹10k</option>
        <option value="₹10k-₹20k">₹10k–₹20k</option>
        <option value="₹20k+">₹20k+</option>
      </select>
    </div>
  );
}
