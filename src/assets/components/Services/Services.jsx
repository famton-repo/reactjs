import React from "react";
import Img1 from "../../black coffee.jpg";
import Img2 from "../../coffee2.png";
import Img3 from "../../coffee-white.png";

const ServicesData = [
  {
    id: 1,
    img: Img1,
    name: "Black Coffee",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img2,
    name: "Hot Coffee",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    aosDelay: "300",
  },
  {
    id: 3,
    img: Img3,
    name: "Cold Coffee",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    aosDelay: "500",
  },
];

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-20 mt-10">
      {/* Header section */}
      <div className="text-center mb-16 max-w-[600px] mx-auto">
        <h1 className="text-3xl font-bold mb-4 font-['Raleway'] text-gray-800">
          Fresh and <span className="text-[#f97316]">Tasty coffee</span>
        </h1>
        <p className="text-sm text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos reprehenderit eum ducimus,
          distinctio cum eaque totam voluptatem ex dolorem fuga.
        </p>
      </div>

      {/* Services Card section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-4 place-items-center">
        {ServicesData.map((service) => (
          <div
            key={service.id}
            className="flex flex-col items-center justify-center text-center p-4"
          >
            <div className="h-[200px] mb-6 relative">
              <img
                src={service.img}
                alt={service.name}
                className="max-h-[200px] block mx-auto hover:scale-110 duration-300 drop-shadow-md"
              />
            </div>
            <h1 className="text-xl font-bold text-[#eab308] mt-2 mb-2 font-['Raleway']">
              {service.name}
            </h1>
            <p className="text-sm text-gray-600 px-4">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
