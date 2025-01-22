
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <main className="w-full py-24 max-w-screen-xl m-auto">
      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-secondary text-white p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            About Us - Comforty
          </h1>
          <p className="text-lg mb-8">
            At Comforty, we believe that the right chair can transform your
            space and elevate your comfort. Specializing in ergonomic design,
            premium materials, and modern aesthetics, we craft chairs that
            seamlessly blend style with functionality.
          </p>
          <button className="inline-block bg-secondary text-white px-6 py-3 rounded-md transition-colors">
            View collection
          </button>
        </div>
        <div className="relative min-h-[400px]">
        <img
  src="/images/beige.png"
  alt="Minimalist chair"
  className="object-cover"
/>

        </div>
      </section>

      <section className="py-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          What Makes Our Brand Different
        </h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-[18px] text-secondary">
          <div className="flex flex-col gap-2">
          <img
  src="/images/delivery.png"
  alt="Next day as standard"
  className="mx-auto mb-4"
/>

            <h3 className="font-semibold">Next day as standard</h3>
            <p className="text-gray-600">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>
          <div className="flex flex-col gap-2">
          <img
  src="/images/check.png"
  alt="Made by true artisans"
  className="mx-auto mb-4"
/>

            <h3 className="font-semibold">Made by true artisans</h3>
            <p className="text-gray-600">
              Handmade crafted goods made with real passion and craftsmanship
            </p>
          </div>
          <div className="flex flex-col gap-2">
          <img
  src="/images/Purchase.png"
  alt="Unbeatable prices"
  className="mx-auto mb-4"
/>

            <h3 className="font-semibold">Unbeatable prices</h3>
            <p className="text-gray-600">
              For our materials and quality you wont find better prices
              anywhere
            </p>
          </div>
          <div className="flex flex-col gap-2">
          <img
  src="/images/Sprout.png"
  alt="Recycled packaging"
  className="mx-auto mb-4"
/>

            <h3 className="font-semibold">Recycled packaging</h3>
            <p className="text-gray-600">
              We use 100% recycled materials to ensure our footprint is more manageable
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Our Popular Products
        </h2>
        <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="relative h-64">
            <img
  src="/images/sofa.png"
  alt="The Poplar suede sofa"
  className="object-cover"
/>

            </div>
            <div className="p-4">
              <h3 className="font-semibold">The Poplar suede sofa</h3>
              <p className="text-gray-600">$99.00</p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="relative h-64">
            <img
  src="/images/Parent.png"
  alt="The Dandy chair"
  className="object-cover"
/>

            </div>
            <div className="p-4">
              <h3 className="font-semibold">The Dandy chair</h3>
              <p className="text-gray-600">$99.00</p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="relative h-64">
            <img
  src="/images/dandy.png"
  alt="The Dandy chair"
  className="object-cover"
/>

            </div>
            <div className="p-4">
              <h3 className="font-semibold">The Dandy chair</h3>
              <p className="text-gray-600">$99.00</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
