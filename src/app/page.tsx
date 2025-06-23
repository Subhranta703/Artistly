"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categoryItems = ["Singer", "Dancer", "DJ", "Speaker"];

export default function HomePage() {
  return (
    <main>
      <Navbar />

      {/* Hero Section with fade-in */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-700 p-10 text-center text-white"
      >
        <h1 className="text-4xl font-bold">Welcome to Artistly.com</h1>
        <p className="mt-4 text-lg">Book top artists for your events</p>
      </motion.section>

      {/* Animated Category Cards */}
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
            className="bg-white p-4 rounded shadow text-blue-600 text-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            {category}
          </motion.div>
        ))}
      </motion.section>

      <Footer />
    </main>
  );
}
