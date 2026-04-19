import React from "react";
import BgImage from "../../assets/bg-slate2.jpg";

import Flask2 from "../../assets/flask2.png";
import Navbar from "./Navbar/navbar";
import {motion} from "framer-motion";

const bgImageStyle = {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
};

const Hero = () => {
  return (
    <main style={bgImageStyle}>
      <section className="min-h-[750px] w-full pt-10 relative overflow-hidden font-sans">
        <Navbar/>
        {/* Very large background faint text */}
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 whitespace-nowrap z-0 pointer-events-none flex w-full justify-between px-20">
            <h1 className="text-[120px] md:text-[200px] lg:text-[250px] font-bold text-[#23252e] leading-none select-none tracking-tighter ml-10">
                Blvck
            </h1>
            <h1 className="text-[120px] md:text-[200px] lg:text-[250px] font-bold text-[#23252e] leading-none select-none tracking-tighter mt-32 mr-[-100px]">
                Tumbler
            </h1>
        </div>

        <div className="container mx-auto px-4 md:px-10 relative">
          
          {/* Main Title */}
          <div className="absolute top-10 left-4 md:left-24 z-20">
            <motion.h1  initial={{opacity:0,y:-100}} animate={{opacity:1,y:0}} transition={{type:"spring",stiffness:100,damping:10,delay:0.8}} className="text-5xl md:text-6xl font-bold leading-tight text-[#fcd5a0] tracking-wide">
              Blvck<br/>Tumbler
            </motion.h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 place-items-center min-h-[850px] relative z-10 pt-48 md:pt-0">
            
            {/* Left text section */}
            <div className="relative mt-20 md:mt-0 p-4 justify-self-center md:justify-self-end mr-0 md:mr-10">
              <div className="absolute top-0 -left-6 w-[320px] h-[200px] bg-[#2a2c35]/50 z-0 shadow-xl"></div>
              <div className="relative z-10 space-y-4 max-w-[280px] p-2">
                <h2 className="text-lg md:text-xl font-bold text-[#a8a196]">Black Lifestyle Lovers,</h2>
                <p className="text-[13px] text-gray-400 opacity-80 leading-relaxed font-semibold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Delectus aspernatur, cumque eos neque dolorem architecto deserunt.
                </p>
              </div>
            </div>

            {/* Center image section */}
            <div className="relative w-full flex justify-center items-center h-[500px] md:h-[700px]">
              {/* orange circle ring */}
              <div className="h-[120px] md:h-[180px] w-[120px] md:w-[180px] absolute top-[15%] md:top-[12%] right-[10%] md:right-[-20%] border-[#d68b19] border-[15px] md:border-[25px] rounded-full z-10"></div>

              {/* The black tumbler */}
              <img src={Flask2} alt="Black Tumbler" className="relative z-30 h-full w-auto object-contain img-shadow max-h-[450px] md:max-h-[650px] drop-shadow-2xl translate-y-10 scale-110" />
            </div>

            {/* Right text section */}
            <div className="relative mt-20 md:mt-0 p-4 justify-self-center md:justify-self-start ml-0 md:ml-10">
              <div className="absolute top-0 -left-6 w-[320px] h-[200px] bg-[#2a2c35]/50 z-0 shadow-xl"></div>
              <div className="relative z-10 space-y-4 max-w-[280px] p-2">
                <h2 className="text-lg md:text-xl font-bold text-[#a8a196]">Black Lifestyle Lovers,</h2>
                <p className="text-[13px] text-gray-400 opacity-80 leading-relaxed font-semibold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Delectus aspernatur, cumque eos neque dolorem architecto deserunt.there is a point of coffee station.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;