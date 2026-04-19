import React from "react";
import BgImage from "../../bg-slate.png";
import BlackCoffee from "../../black.png";
import Navbar from "../Navbar/Navbar";

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundColor: "#1c2027", /* dark fallback if image is missing */
};

const Hero = () => {
  return (
    <main style={bgStyle} className="min-h-screen bg-[#1c2027]">
      <section className="relative min-h-screen w-full overflow-hidden">

        {/* Navbar */}
        <Navbar />

        {/* Hero Grid */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 items-stretch min-h-screen pt-20 pb-10">

            {/* ── LEFT COLUMN ── */}
            <div className="flex flex-col justify-between h-full py-16">

              {/* Big heading */}
              <h1
                className="text-[72px] font-black leading-[1.05] tracking-tight text-[#f0d5b8]"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                Blvck<br />Tumbler
              </h1>

              {/* Bottom text block with dark box decoration */}
              <div className="relative">
                {/* Dark decorative box behind text */}
                <div className="absolute -top-6 -left-6 w-[240px] h-[185px] bg-[#1a1f25]/80 z-0 rounded-sm" />
                <div className="relative z-10 space-y-3 pl-1">
                  <h2 className="text-lg font-semibold text-[#f0d5b8]">
                    Black Lifestyle Lovers,
                  </h2>
                  <p className="text-xs text-[#f0d5b8]/55 leading-relaxed max-w-[230px]">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Delectus aspernatur, cumque eos neque dolorem architecto
                    deserunt quis voluptatibus in quisquam quia ducimus
                  </p>
                </div>
              </div>
            </div>

            {/* ── CENTER COLUMN — tumbler image ── */}
            <div className="relative flex justify-center items-center h-full py-10">

              {/* Orange circle ring — top-right of tumbler */}
              <div
                className="absolute top-[120px] right-[-20px] w-[170px] h-[170px] rounded-full z-10 animate-float-ring"
                style={{
                  border: "20px solid #f97316",
                }}
              />

              {/* Tumbler image */}
              <img
                src={BlackCoffee}
                alt="Black Coffee Tumbler"
                className="relative z-20 h-[560px] object-contain img-shadow animate-float"
              />

              {/* Giant faded background text */}
              <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none overflow-hidden">
                <span
                  className="text-[130px] font-black whitespace-nowrap select-none"
                  style={{ color: "rgba(255,255,255,0.04)", lineHeight: 1 }}
                >
                  Blvck Tumbler
                </span>
              </div>
            </div>

            {/* ── RIGHT COLUMN ── */}
            <div className="flex flex-col justify-end h-full py-16 pb-24">

              {/* Bottom text block with dark box decoration */}
              <div className="relative">
                {/* Dark decorative box behind text */}
                <div className="absolute -top-6 -right-4 w-[240px] h-[185px] bg-[#1a1f25]/80 z-0 rounded-sm" />
                <div className="relative z-10 space-y-3 pl-2">
                  <h2 className="text-lg font-semibold text-[#f0d5b8]">
                    Blvck Tumbler
                  </h2>
                  <p className="text-xs text-[#f0d5b8]/55 leading-relaxed max-w-[230px]">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Delectus aspernatur.Delectus aspernatur, Delectus aspernatur.
                    Delectus aspernatur. Delectus aspernatur.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>
    </main>
  );
};

export default Hero;
