"use client";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

const categories = ["Singer", "Dancer", "DJ", "Speaker"];
const languages = ["English", "Hindi", "Punjabi", "Tamil", "Bengali"];
const feeOptions = ["₹5k-₹10k", "₹10k-₹20k", "₹20k+"];

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  bio: yup.string().required("Bio is required"),
  category: yup.array().min(1, "Select at least one category"),
  languages: yup.array().min(1, "Select at least one language"),
  fee: yup.string().required("Fee range is required"),
  location: yup.string().required("Location is required"),
  profileImage: yup.mixed().notRequired()
});

export default function OnboardPage() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      category: [],
      languages: [],
    },
  });

const onSubmit = (data: any) => {
  const artist = { ...data, image: imageBase64 };
  const existing = JSON.parse(localStorage.getItem("artistSubmissions") || "[]");
  const updated = [...existing, artist];
  localStorage.setItem("artistSubmissions", JSON.stringify(updated));
  alert("Artist submitted successfully!");
  reset();
  setImageBase64(null);
};



const [imageBase64, setImageBase64] = useState<string | null>(null);

const handleImageChange = (e: any) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageBase64(reader.result as string);
    };
    reader.readAsDataURL(file);
  }
};


  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-700 shadow-md rounded mt-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">Artist Onboarding</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div>
          <label>Name</label>
          <input {...register("name")} className="w-full border rounded p-2" />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        {/* Bio */}
        <div>
          <label>Bio</label>
          <textarea {...register("bio")} className="w-full border rounded p-2" />
          {errors.bio && <p className="text-red-500 text-sm">{errors.bio.message}</p>}
        </div>

        {/* Category Multi-select */}
        <div>
          <label>Category</label>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <label key={cat} className="flex items-center gap-1">
                <input
                  type="checkbox"
                  value={cat}
                  {...register("category")}
                />
                {cat}
              </label>
            ))}
          </div>
          {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
        </div>

        {/* Languages Multi-select */}
        <div>
          <label>Languages Spoken</label>
          <div className="flex flex-wrap gap-2">
            {languages.map((lang) => (
              <label key={lang} className="flex items-center gap-1">
                <input
                  type="checkbox"
                  value={lang}
                  {...register("languages")}
                />
                {lang}
              </label>
            ))}
          </div>
          {errors.languages && <p className="text-red-500 text-sm">{errors.languages.message}</p>}
        </div>

        {/* Fee Range */}
        <div>
          <label>Fee Range</label>
          <select {...register("fee")} className="w-full border rounded p-2">
            <option value="">Select Fee Range</option>
            {feeOptions.map((fee) => (
              <option key={fee} value={fee}>
                {fee}
              </option>
            ))}
          </select>
          {errors.fee && <p className="text-red-500 text-sm">{errors.fee.message}</p>}
        </div>

        {/* Location */}
        <div>
          <label>Location</label>
          <input {...register("location")} className="w-full border rounded p-2" />
          {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
        </div>

        {/* Image Upload */}
        <div>
          <label>Profile Image (optional)</label>
          <input type="file" {...register("profileImage")} onChange={handleImageChange} />
          {imagePreview && <img src={imagePreview} alt="Preview" className="w-24 h-24 rounded mt-2 object-cover" />}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
