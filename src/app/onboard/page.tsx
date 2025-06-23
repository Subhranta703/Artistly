"use client";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  name: yup.string().required(),
  bio: yup.string().required(),
  category: yup.array().min(1),
  languages: yup.array().min(1),
  fee: yup.string().required(),
  location: yup.string().required(),
});

export default function OnboardPage() {
  const { register, handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log("Artist submitted", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto p-6">
      <input {...register("name")} placeholder="Artist Name" className="input" />
      <textarea {...register("bio")} placeholder="Bio" className="textarea" />
      {/* Add Multi-selects + Dropdowns */}
      <button type="submit" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
}
