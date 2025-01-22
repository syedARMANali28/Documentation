import React from "react";

const page = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* Card 1 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="border rounded-lg overflow-hidden shadow-md">
                <div className="relative h-[312px] w-full">
                  <img
                    alt="product"
                    className="object-cover object-center w-full h-full"
                    src="/images/beige.png"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY 1
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium mb-1">
                    Product Title 1
                  </h2>
                  <p className="text-gray-700">$25</p>
                  <button className="flex items-center mt-3 px-4 py-2 text-white bg-emerald-600 hover:bg-indigo-600 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-4 h-4 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2m0 0l1.76 8.45a2 2 0 001.94 1.55h8.76a2 2 0 001.94-1.55L19.6 5m-1.2-2H3.4m12.2 10a2 2 0 11-4 0m4 0a2 2 0 11-4 0m4 0H9"
                      />
                    </svg>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="border rounded-lg overflow-hidden shadow-md">
                <div className="relative h-[312px] w-full">
                  <img
                    alt="product"
                    className="object-cover object-center w-full h-full"
                    src="/images/pink.png"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY 2
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium mb-1">
                    Product Title 2
                  </h2>
                  <p className="text-gray-700">$30</p>
                  <button className="flex items-center mt-3 px-4 py-2 text-white bg-emerald-600 hover:bg-indigo-600 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-4 h-4 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2m0 0l1.76 8.45a2 2 0 001.94 1.55h8.76a2 2 0 001.94-1.55L19.6 5m-1.2-2H3.4m12.2 10a2 2 0 11-4 0m4 0a2 2 0 11-4 0m4 0H9"
                      />
                    </svg>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="border rounded-lg overflow-hidden shadow-md">
                <div className="relative h-[312px] w-full">
                  <img
                    alt="product"
                    className="object-cover object-center w-full h-full"
                    src="/images/orange.png"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY 3
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium mb-1">
                    Product Title 3
                  </h2>
                  <p className="text-gray-700">$35</p>
                  <button className="flex items-center mt-3 px-4 py-2 text-white bg-emerald-600 hover:bg-indigo-600 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-4 h-4 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2m0 0l1.76 8.45a2 2 0 001.94 1.55h8.76a2 2 0 001.94-1.55L19.6 5m-1.2-2H3.4m12.2 10a2 2 0 11-4 0m4 0a2 2 0 11-4 0m4 0H9"
                      />
                    </svg>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="border rounded-lg overflow-hidden shadow-md">
                <div className="relative h-[312px] w-full">
                  <img
                    alt="product"
                    className="object-cover object-center w-full h-full"
                    src="/images/white.png"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY 4
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium mb-1">
                    Product Title 4
                  </h2>
                  <p className="text-gray-700">$40</p>
                  <button className="flex items-center mt-3 px-4 py-2 text-white bg-emerald-600 hover:bg-indigo-600 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-4 h-4 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2m0 0l1.76 8.45a2 2 0 001.94 1.55h8.76a2 2 0 001.94-1.55L19.6 5m-1.2-2H3.4m12.2 10a2 2 0 11-4 0m4 0a2 2 0 11-4 0m4 0H9"
                      />
                    </svg>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            {/* Card 5 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="border rounded-lg overflow-hidden shadow-md">
                <div className="relative h-[312px] w-full">
                  <img
                    alt="product"
                    className="object-cover object-center w-full h-full"
                    src="/images/wood.png"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY 5
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium mb-1">
                    Product Title 5
                  </h2>
                  <p className="text-gray-700">$45</p>
                  <button className="flex items-center mt-3 px-4 py-2 text-white bg-emerald-600 hover:bg-indigo-600 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-4 h-4 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2m0 0l1.76 8.45a2 2 0 001.94 1.55h8.76a2 2 0 001.94-1.55L19.6 5m-1.2-2H3.4m12.2 10a2 2 0 11-4 0m4 0a2 2 0 11-4 0m4 0H9"
                      />
                    </svg>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            {/* Repeat for Card 6 to Card 12 */}
            {/* Card 6 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="border rounded-lg overflow-hidden shadow-md">
                <div className="relative h-[312px] w-full">
                  <img
                    alt="product"
                    className="object-cover object-center w-full h-full"
                    src="/images/card.png"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY 6
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium mb-1">
                    Product Title 6
                  </h2>
                  <p className="text-gray-700">$50</p>
                  <button className="flex items-center mt-3 px-4 py-2 text-white bg-emerald-600 hover:bg-indigo-600 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-4 h-4 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2m0 0l1.76 8.45a2 2 0 001.94 1.55h8.76a2 2 0 001.94-1.55L19.6 5m-1.2-2H3.4m12.2 10a2 2 0 11-4 0m4 0a2 2 0 11-4 0m4 0H9"
                      />
                    </svg>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="border rounded-lg overflow-hidden shadow-md">
                <div className="relative h-[312px] w-full">
                  <img
                    alt="product"
                    className="object-cover object-center w-full h-full"
                    src="/images/b.png"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY 1
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium mb-1">
                    Product Title 1
                  </h2>
                  <p className="text-gray-700">$25</p>
                  <button className="flex items-center mt-3 px-4 py-2 text-white bg-emerald-600 hover:bg-indigo-600 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-4 h-4 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2m0 0l1.76 8.45a2 2 0 001.94 1.55h8.76a2 2 0 001.94-1.55L19.6 5m-1.2-2H3.4m12.2 10a2 2 0 11-4 0m4 0a2 2 0 11-4 0m4 0H9"
                      />
                    </svg>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="border rounded-lg overflow-hidden shadow-md">
                <div className="relative h-[312px] w-full">
                  <img
                    alt="product"
                    className="object-cover object-center w-full h-full"
                    src="/images/beige.png"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY 2
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium mb-1">
                    Product Title 2
                  </h2>
                  <p className="text-gray-700">$30</p>
                  <button className="flex items-center mt-3 px-4 py-2 text-white bg-emerald-600 hover:bg-indigo-600 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-4 h-4 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2m0 0l1.76 8.45a2 2 0 001.94 1.55h8.76a2 2 0 001.94-1.55L19.6 5m-1.2-2H3.4m12.2 10a2 2 0 11-4 0m4 0a2 2 0 11-4 0m4 0H9"
                      />
                    </svg>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="border rounded-lg overflow-hidden shadow-md">
                <div className="relative h-[312px] w-full">
                  <img
                    alt="product"
                    className="object-cover object-center w-full h-full"
                    src="/images/a.png"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY 3
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium mb-1">
                    Product Title 3
                  </h2>
                  <p className="text-gray-700">$35</p>
                  <button className="flex items-center mt-3 px-4 py-2 text-white bg-emerald-600 hover:bg-indigo-600 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-4 h-4 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2m0 0l1.76 8.45a2 2 0 001.94 1.55h8.76a2 2 0 001.94-1.55L19.6 5m-1.2-2H3.4m12.2 10a2 2 0 11-4 0m4 0a2 2 0 11-4 0m4 0H9"
                      />
                    </svg>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="border rounded-lg overflow-hidden shadow-md">
                <div className="relative h-[312px] w-full">
                  <img
                    alt="product"
                    className="object-cover object-center w-full h-full"
                    src="/images/pink.png"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY 4
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium mb-1">
                    Product Title 4
                  </h2>
                  <p className="text-gray-700">$40</p>
                  <button className="flex items-center mt-3 px-4 py-2 text-white bg-emerald-600 hover:bg-indigo-600 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-4 h-4 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2m0 0l1.76 8.45a2 2 0 001.94 1.55h8.76a2 2 0 001.94-1.55L19.6 5m-1.2-2H3.4m12.2 10a2 2 0 11-4 0m4 0a2 2 0 11-4 0m4 0H9"
                      />
                    </svg>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            {/* Card 5 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="border rounded-lg overflow-hidden shadow-md">
                <div className="relative h-[312px] w-full">
                  <img
                    alt="product"
                    className="object-cover object-center w-full h-full"
                    src="/images/orange.png"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY 5
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium mb-1">
                    Product Title 5
                  </h2>
                  <p className="text-gray-700">$45</p>
                  <button className="flex items-center mt-3 px-4 py-2 text-white bg-emerald-600 hover:bg-indigo-600 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-4 h-4 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2m0 0l1.76 8.45a2 2 0 001.94 1.55h8.76a2 2 0 001.94-1.55L19.6 5m-1.2-2H3.4m12.2 10a2 2 0 11-4 0m4 0a2 2 0 11-4 0m4 0H9"
                      />
                    </svg>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            {/* Repeat for Card 6 to Card 12 */}
            {/* Card 6 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="border rounded-lg overflow-hidden shadow-md">
                <div className="relative h-[312px] w-full">
                  <img
                    alt="product"
                    className="object-cover object-center w-full h-full"
                    src="/images/3.png"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY 6
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium mb-1">
                    Product Title 6
                  </h2>
                  <p className="text-gray-700">$50</p>
                  <button className="flex items-center mt-3 px-4 py-2 text-white bg-emerald-600 hover:bg-indigo-600 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-4 h-4 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2m0 0l1.76 8.45a2 2 0 001.94 1.55h8.76a2 2 0 001.94-1.55L19.6 5m-1.2-2H3.4m12.2 10a2 2 0 11-4 0m4 0a2 2 0 11-4 0m4 0H9"
                      />
                    </svg>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
