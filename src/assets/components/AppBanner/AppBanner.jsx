import React from "react";
import BgImage from "../../coffee-beans-bg.png"; // We can use this for texture or just use a color
import AppStoreImg from "../../app_store.png";
import PlayStoreImg from "../../play_store.png";

const AppBanner = () => {
  const bannerStyle = {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
  };

  return (
    <div className="container mx-auto px-4 py-14">
      <div className="bg-gray-100/50 rounded-2xl flex flex-col md:flex-row items-center justify-between overflow-hidden shadow-sm border border-gray-100">
        
        {/* Left Side: Mock image of coffee cup */}
        <div className="w-full md:w-1/2 min-h-[300px] md:min-h-[400px] relative">
           {/* If coffee-beans-bg isn't right, we just use it as a background for the left pane */}
          <div style={bannerStyle} className="absolute inset-0 w-full h-full object-cover"></div>
        </div>

        {/* Right Side: Text & Buttons */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Download the app
          </h1>
          <p className="text-sm text-gray-600 max-w-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            consectetur adipisicing elit. Officiis
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="#">
              <img
                src={AppStoreImg}
                alt="App Store"
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[150px] transition-transform duration-300 hover:scale-105"
              />
            </a>
            <a href="#">
              <img
                src={PlayStoreImg}
                alt="Google Play Store"
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[150px] transition-transform duration-300 hover:scale-105"
              />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AppBanner;
