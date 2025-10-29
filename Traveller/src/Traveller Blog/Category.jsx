import React from "react";
import network from "../assets/network.svg";
import plane from "../assets/plane img.svg";
import mike from "../assets/mike.svg";
import settings from "../assets/Settings.svg";
import Rectangle from "../assets/rectangle.svg";
function Category() {
  return (
    <section className="py-10 mt-20 -mb-10 bg-white">
      {/* Header Section */}
      <div className="text-center mb-10">
        <p className="text-sm font-semibold text-gray-500 tracking-wider">
          CATEGORY
        </p>
        <h2 className="text-4xl font-bold text-[#1e1e2a] mt-2">
          We Offer Best Services
        </h2>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-20 px-6">
        {/* Card 1 */}
        <div className="max-w-60 text-center p-4 px-10 py-12 rounded-2xl  hover:shadow-lg transition">
          <div className="flex justify-center mb-4">
            <img src={network} alt="network" className="w-20 h-20" />
          </div>
          <h3 className="text-lg font-semibold text-[#1e1e2a] mb-2">
            Calculated Weather
          </h3>
          <p className="text-gray-500 text-sm">
            Built Wicket longer admire do barton vanity itself do in it.
          </p>
        </div>

        {/* Card 2 */}
        <div className="relative">
          {/* Rectangle Shape (Background Decoration) */}
          <img
            src={Rectangle}
            alt="rectangle"
            className="absolute -bottom-2 -left-6 w-16 h-16 z-0"
          />

          {/* Card */}
          <div className="relative max-w-60 text-center p-4 px-10 py-10 rounded-2xl hover:shadow-lg transition bg-white z-10">
            <div className="flex justify-center mb-4">
              <img src={plane} alt="plane" className="w-20 h-20" />
            </div>
            <h3 className="text-lg font-semibold text-[#1e1e2a] mb-2">
              Best Flights
            </h3>
            <p className="text-gray-500 text-sm">
              Engrossed listening. Park gate sell they west hard for the.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="max-w-60 text-center p-4 px-10 py-12 rounded-2xl hover:shadow-lg transition">
          <div className="flex justify-center mb-4">
            <img src={mike} alt="mike" className="w-20 h-20" />
          </div>
          <h3 className="text-lg font-semibold text-[#1e1e2a] mb-2">
            Local Events
          </h3>
          <p className="text-gray-500 text-sm">
            Barton vanity itself do in it. Preferred to men it engrossed
            listening.
          </p>
        </div>

        {/* Card 4 */}
        <div className="max-w-60 text-center p-4 px-10 py-12 rounded-2xl hover:shadow-lg transition">
          <div className="flex justify-center mb-4">
            <img src={settings} alt="settings" className="w-20 h-20" />
          </div>
          <h3 className="text-lg font-semibold text-[#1e1e2a] mb-2">
            Customization
          </h3>
          <p className="text-gray-500 text-sm">
            We deliver outsourced aviation services for military customers.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Category;
