import React from "react";


export default function Home() {
  return (
    <div>
      {/* Main Banner */}
      <div className="w-full flex justify-center">
  <div className="bg-[#F0F2F3] w-full max-w-[1321px] h-auto md:h-[850px] flex flex-col md:flex-row items-center px-4 md:px-0">
    {/* Left Section */}
    <div className="w-full md:w-1/2 p-4 md:pl-20 text-center md:text-left">
      <p className="text-gray-500 text-lg">WELCOME TO CHAIRY</p>
      <h1 className="text-3xl md:text-5xl font-bold mt-4 leading-snug">
        Best Furniture <br className="hidden md:block" /> Collection For Your <br className="hidden md:block" /> Interior.
      </h1>
      <button className="mt-8 bg-[#029FAE] hover:bg-indigo-600 text-white font-bold py-2 px-6 flex items-center justify-center rounded focus:outline-none focus:ring-2 focus:ring-indigo-200 transition duration-200">
        Shop Now
        <span className="ml-2">➔</span>
      </button>
    </div>

    {/* Right Section */}
    <div className="w-full md:w-1/2 flex justify-center md:justify-end p-4 md:pr-16">
      <img
        className="w-full max-w-[300px] md:max-w-[434px] h-auto"
        src="/images/chair.png"
        alt="Chair"
      />
    </div>
  </div>
</div>


      {/* Logo Section */}
      <div className="flex flex-wrap gap-8 md:gap-24 justify-center items-center my-8">
  {[
    { src: "/images/zapier.png", width: 85, height: 87 },
    { src: "/images/pipedrive.png", width: 107, height: 109 },
    { src: "/images/bank.png", width: 135, height: 139 },
    { src: "/images/z.png", width: 63, height: 65 },
    { src: "/images/burnt.png", width: 98, height: 101 },
    { src: "/images/doc.png", width: 113, height: 115 },
    { src: "/images/moz.png", width: 84, height: 87 },
  ].map((logo, index) => (
    <img
      key={index}
      className="w-[60px] h-[60px] md:w-[100px] md:h-[100px]" // Responsive size
      src={logo.src}
      alt="logo"
      width={logo.width}
      height={logo.height}
    />
  ))}
</div>


      {/* Products Section */}
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap justify-center -m-4">
          {/* Card 1 */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <div className="relative rounded-lg border overflow-hidden shadow-md">
              <span className="absolute top-2 left-2 text-xs text-white font-bold px-2 py-1 rounded bg-orange-500">
                Sales
              </span>
              <a className="block relative h-[312px] w-full">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full"
                  src="/images/pink.png" // Replace with your image path
                />
              </a>
              <div className="mt-4 text-center">
                <h2 className="text-[#007580] title-font font-medium">
                  Library Stool Chair
                </h2>
                <p className="mt-1 flex justify-center items-center gap-2">
                  <span className="font-bold">$20</span>
                  <span className="line-through text-gray-500 text-sm">$30</span>
                </p>
                <button className="mt-2 bg-gray-200 border border-gray-300 text-gray-600 font-bold py-1 px-4 rounded hover:bg-[#007580] hover:text-white transition duration-200 flex items-center justify-center">
                  🛒
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <div className="relative rounded-lg border overflow-hidden shadow-md">
              <span className="absolute top-2 left-2 text-xs text-white font-bold px-2 py-1 rounded bg-green-500">
                New
              </span>
              <a className="block relative h-[312px] w-full">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full"
                  src="/images/beige.png" // Replace with your image path
                />
              </a>
              <div className="mt-4 text-center">
                <h2 className="text-[#007580] title-font font-medium">
                  Library Stool Chair
                </h2>
                <p className="mt-1 flex justify-center items-center gap-2">
                  <span className="font-bold">$20</span>
                </p>
                <button className="mt-2 bg-gray-200 border border-gray-300 text-gray-600 font-bold py-1 px-4 rounded hover:bg-[#007580] hover:text-white transition duration-200 flex items-center justify-center">
                  🛒
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <div className="relative rounded-lg border overflow-hidden shadow-md">
              <a className="block relative h-[312px] w-full">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full"
                  src="/images/orange.png" // Replace with your image path
                />
              </a>
              <div className="mt-4 text-center">
                <h2 className="text-[#007580] title-font font-medium">
                  Library Stool Chair
                </h2>
                <p className="mt-1 flex justify-center items-center gap-2">
                  <span className="font-bold">$20</span>
                </p>
                <button className="mt-2 bg-gray-200 border border-gray-300 text-gray-600 font-bold py-1 px-4 rounded hover:bg-[#007580] hover:text-white transition duration-200 flex items-center justify-center">
                  🛒
                </button>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <div className="relative rounded-lg border overflow-hidden shadow-md">
              <a className="block relative h-[312px] w-full">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full"
                  src="/images/white.png" // Replace with your image path
                />
              </a>
              <div className="mt-4 text-center">
                <h2 className="text-[#007580] title-font font-medium">
                  Library Stool Chair
                </h2>
                <p className="mt-1 flex justify-center items-center gap-2">
                  <span className="font-bold">$20</span>
                </p>
                <button className="mt-2 bg-gray-200 border border-gray-300 text-gray-600 font-bold py-1 px-4 rounded hover:bg-[#007580] hover:text-white transition duration-200 flex items-center justify-center">
                  🛒
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      {/* next */}
      <div>
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col">
        <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
          <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-5xl mb-2 sm:mb-0">
            Top Categories
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        {/* Category 1 */}
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div className="rounded-lg overflow-hidden w-[424px] h-[424px]">
            <img
              alt="chair"
              className="object-cover object-center w-full h-full"
              src="/images/category.png"
            />
          </div>
        </div>

        {/* Category 2 */}
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div className="rounded-lg overflow-hidden w-[424px] h-[424px]">
            <img
              alt="chair"
              className="object-cover object-center w-full h-full"
              src="/images/category2.png"
            />
          </div>
        </div>

        {/* Category 3 */}
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div className="rounded-lg overflow-hidden w-[424px] h-[424px]">
            <img
              alt="chair"
              className="object-cover object-center w-full h-full"
              src="/images/category3.png"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</div>


{/* photos */}
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      
    </div>
    <div className="flex flex-wrap -m-4">
      {/* Left Section: Large Image */}
      <div className="lg:w-1/2 sm:w-1/2 p-4">
        <div className="flex relative">
          <img
            alt="dummy"
            className="object-cover object-center w-[648px] h-[648px]"
            src="/images/orange.png"
          />
        </div>
      </div>

      {/* Right Section: 4 Small Images arranged in a Grid */}
      <div className="lg:w-1/2 sm:w-full p-4">
        <div className="grid grid-cols-2 gap-x-4 gap-y-4"> {/* gap-4 for equal horizontal & vertical spacing */}
          <div className="flex relative">
            <img
              alt="gallery"
              className="object-cover object-center w-[312px] h-[312px]"
              src="/images/white.png"
            />
          </div>
          <div className="flex relative">
            <img
              alt="gallery"
              className="object-cover object-center w-[312px] h-[312px]"
              src="/images/beige.png"
            />
          </div>
          <div className="flex relative">
            <img
              alt="gallery"
              className="object-cover object-center w-[312px] h-[312px]"
              src="/images/card.png"
            />
          </div>
          <div className="flex relative">
            <img
              alt="gallery"
              className="object-cover object-center w-[312px] h-[312px]"
              src="/images/beige.png"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




{/* last thing */}
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    {/* Heading Section */}
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-5xl mb-6 sm:mb-0 mx-auto">
        Our Products
      </h1>
    </div>

    {/* Product Cards Section */}
    <div className="flex flex-wrap -m-4">
      {/* First Card */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <div className="relative rounded-lg border overflow-hidden shadow-md">
          <a className="block relative h-[312px] w-full">
            <img
              alt="Library Stool Chair"
              className="object-cover object-center w-full h-full"
              src="/images/beige.png"
            />
          </a>
          <div className="mt-4 text-center">
            <h2 className="text-[#007580] title-font font-medium">
              Library Stool Chair
            </h2>
            <p className="mt-1 flex justify-center items-center gap-2">
              <span className="font-bold">$20</span>
            </p>
            <button className="mt-2 bg-gray-200 border border-gray-300 text-gray-600 font-bold py-1 px-4 rounded hover:bg-[#F4F3EE] hover:text-white transition duration-200 flex items-center justify-center">
              🛒
            </button>
          </div>
        </div>
      </div>

      {/* Second Card */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <div className="relative rounded-lg border overflow-hidden shadow-md">
          <a className="block relative h-[312px] w-full">
            <img
              alt="Library Stool Chair"
              className="object-cover object-center w-full h-full"
              src="/images/pink.png"
            />
          </a>
          <div className="mt-4 text-center">
            <h2 className="text-[#007580] title-font font-medium">
              Library Stool Chair
            </h2>
            <p className="mt-1 flex justify-center items-center gap-2">
              <span className="font-bold">$20</span>
            </p>
            <button className="mt-2 bg-gray-200 border border-gray-300 text-gray-600 font-bold py-1 px-4 rounded hover:bg-[#F4F3EE] hover:text-white transition duration-200 flex items-center justify-center">
              🛒
            </button>
          </div>
        </div>
      </div>

      {/* Third Card */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <div className="relative rounded-lg border overflow-hidden shadow-md">
          <a className="block relative h-[312px] w-full">
            <img
              alt="Library Stool Chair"
              className="object-cover object-center w-full h-full"
              src="/images/orange.png"
            />
          </a>
          <div className="mt-4 text-center">
            <h2 className="text-[#007580] title-font font-medium">
              Library Stool Chair
            </h2>
            <p className="mt-1 flex justify-center items-center gap-2">
              <span className="font-bold">$20</span>
            </p>
            <button className="mt-2 bg-gray-200 border border-gray-300 text-gray-600 font-bold py-1 px-4 rounded hover:bg-[#F4F3EE] hover:text-white transition duration-200 flex items-center justify-center">
              🛒
            </button>
          </div>
        </div>
      </div>

      {/* Fourth Card */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <div className="relative rounded-lg border overflow-hidden shadow-md">
          <a className="block relative h-[312px] w-full">
            <img
              alt="Library Stool Chair"
              className="object-cover object-center w-full h-full"
              src="/images/white.png"
            />
          </a>
          <div className="mt-4 text-center">
            <h2 className="text-[#007580] title-font font-medium">
              Library Stool Chair
            </h2>
            <p className="mt-1 flex justify-center items-center gap-2">
              <span className="font-bold">$20</span>
            </p>
            <button className="mt-2 bg-gray-200 border border-gray-300 text-gray-600 font-bold py-1 px-4 rounded hover:bg-[#F4F3EE] hover:text-white transition duration-200 flex items-center justify-center">
              🛒
            </button>
          </div>
        </div>
      </div>

      {/* Fifth Card */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <div className="relative rounded-lg border overflow-hidden shadow-md">
          <a className="block relative h-[312px] w-full">
            <img
              alt="Library Stool Chair"
              className="object-cover object-center w-full h-full"
              src="/images/a.png"
            />
          </a>
          <div className="mt-4 text-center">
            <h2 className="text-[#007580] title-font font-medium">
              Library Stool Chair
            </h2>
            <p className="mt-1 flex justify-center items-center gap-2">
              <span className="font-bold">$20</span>
            </p>
            <button className="mt-2 bg-gray-200 border border-gray-300 text-gray-600 font-bold py-1 px-4 rounded hover:bg-[#F4F3EE] hover:text-white transition duration-200 flex items-center justify-center">
              🛒
            </button>
          </div>
        </div>
      </div>

      {/* Sixth Card */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <div className="relative rounded-lg border overflow-hidden shadow-md">
          <a className="block relative h-[312px] w-full">
            <img
              alt="Library Stool Chair"
              className="object-cover object-center w-full h-full"
              src="/images/card.png"
            />
          </a>
          <div className="mt-4 text-center">
            <h2 className="text-[#007580] title-font font-medium">
              Library Stool Chair
            </h2>
            <p className="mt-1 flex justify-center items-center gap-2">
              <span className="font-bold">$20</span>
            </p>
            <button className="mt-2 bg-gray-200 border border-gray-300 text-gray-600 font-bold py-1 px-4 rounded hover:bg-[#F4F3EE] hover:text-white transition duration-200 flex items-center justify-center">
              🛒
            </button>
          </div>
        </div>
      </div>

      {/* Seventh Card */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <div className="relative rounded-lg border overflow-hidden shadow-md">
          <a className="block relative h-[312px] w-full">
            <img
              alt="Library Stool Chair"
              className="object-cover object-center w-full h-full"
              src="/images/b.png"
            />
          </a>
          <div className="mt-4 text-center">
            <h2 className="text-[#007580] title-font font-medium">
              Library Stool Chair
            </h2>
            <p className="mt-1 flex justify-center items-center gap-2">
              <span className="font-bold">$20</span>
            </p>
            <button className="mt-2 bg-gray-200 border border-gray-300 text-gray-600 font-bold py-1 px-4 rounded hover:bg-[#F4F3EE] hover:text-white transition duration-200 flex items-center justify-center">
              🛒
            </button>
          </div>
        </div>
      </div>

      {/* Eighth Card */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <div className="relative rounded-lg border overflow-hidden shadow-md">
          <a className="block relative h-[312px] w-full">
            <img
              alt="Library Stool Chair"
              className="object-cover object-center w-full h-full"
              src="/images/beige.png"
            />
          </a>
          <div className="mt-4 text-center">
            <h2 className="text-[#007580] title-font font-medium">
              Library Stool Chair
            </h2>
            <p className="mt-1 flex justify-center items-center gap-2">
              <span className="font-bold">$20</span>
            </p>
            <button className="mt-2 bg-gray-200 border border-gray-300 text-gray-600 font-bold py-1 px-4 rounded hover:bg-[#F4F3EE] hover:text-white transition duration-200 flex items-center justify-center">
              🛒
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



    </div>
  );
}

