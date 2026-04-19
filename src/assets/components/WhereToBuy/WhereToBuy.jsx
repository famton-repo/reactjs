import React from "react";
const WhereToBuy = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Form section */}
        <div className="max-w-md mx-auto w-full">
          <h1 className="text-3xl font-bold font-serif mb-8 text-gray-800">
            Buy our <br /> products from <br /> anywhere
          </h1>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-orange-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-orange-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Country"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-orange-500"
              />
              <input
                type="text"
                placeholder="Zipcode"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-orange-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#f97316] text-white py-3 rounded-md hover:bg-orange-600 transition duration-300 font-semibold"
            >
              Order Now
            </button>
          </form>
        </div>

        {/* Map section */}
        <div className="flex justify-center items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/World_map_blank_without_borders.svg/1000px-World_map_blank_without_borders.svg.png"
            alt="World Map"
            className="w-full max-w-[500px] opacity-20 filter grayscale"
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
    </div>
  );
};

export default WhereToBuy;
