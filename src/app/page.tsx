"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categoryItems = ["Singer", "Dancer", "DJ", "Speaker"];

export default function HomePage() {
  const router = useRouter();

  const handleCategoryClick = (category: string) => {
    router.push(`/artists?category=${encodeURIComponent(category)}`);
  };

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-cover bg-center p-10 text-center text-white min-h-[60vh] flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url('https://wallpapercat.com/w/full/2/5/8/1172820-3840x2160-desktop-4k-guitar-wallpaper-image.jpg')`,
        }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded">
          <h1 className="text-4xl font-bold">Welcome to Artistly</h1>
          <p className="mt-4 text-lg">Book top artists for your events</p>
        </div>
      </motion.section>

      {/* Animated Category Cards with Click */}
      <motion.section
        className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {categoryItems.map((category) => (
          <motion.div
            key={category}
            className="bg-white p-4 rounded shadow text-blue-600 text-center cursor-pointer hover:bg-blue-100 transition"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </motion.div>
        ))}
      </motion.section>

      <Footer />
    </main>
  );
}
