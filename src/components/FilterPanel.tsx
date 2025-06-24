"use client";

import { ChangeEvent } from "react";

type Filters = {
  category: string;
  location: string;
  price: string;
};

type FilterPanelProps = {
  filters: Filters;
  onChange: (field: keyof Filters, value: string) => void;
};

export default function FilterPanel({ filters, onChange }: FilterPanelProps) {
  return (
    <div className="bg-white p-4 rounded shadow space-y-4">
      <div>
        <label>Category</label>
        <input
          type="text"
          value={filters.category}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChange("category", e.target.value)}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label>Location</label>
        <input
          type="text"
          value={filters.location}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChange("location", e.target.value)}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label>Price Range</label>
        <input
          type="text"
          value={filters.price}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChange("price", e.target.value)}
          className="w-full border p-2 rounded"
        />
      </div>
    </div>
  );
}
