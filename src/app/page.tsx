// src/app/page.tsx
export default function HomePage() {
  return (
    <main>
      <Navbar />
      <section className="bg-gray-100 p-10 text-center">
        <h1 className="text-4xl font-bold">Welcome to Artistly.com</h1>
        <p className="mt-4 text-lg">Book top artists for your events</p>
      </section>
      <section className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {/* Category Cards */}
        {["Singer", "Dancer", "DJ", "Speaker"].map((category) => (
          <div key={category} className="bg-white p-4 rounded shadow text-center">
            {category}
          </div>
        ))}
      </section>
      <Footer />
    </main>
  );
}
