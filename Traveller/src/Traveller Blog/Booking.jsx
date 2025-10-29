import React from "react";
import group1 from "../assets/Group 1.svg";
import group3 from "../assets/gruop3.png";
import greece3 from "../assets/Greece3.svg";
import greece2 from "../assets/greece2.png";
import leaf from "../assets/leaf 1.svg";
import map from "../assets/map 1.svg";
import send from "../assets/send 2.svg";
import building from "../assets/building 1.svg";
import heart from "../assets/heart.svg";

function Booking() {
  return (
    <section className="py-10 justify-center mt-15 px-4 lg:px-30 bg-gradient-to-br from-white flex flex-col lg:flex-row  justify-between gap-5">
      {/* LEFT SIDE */}
      <div className="flex-1">
        <p className="text-base font-semibold text-gray-500 mb-2">
          Easy and Fast
        </p>
        <h2 className="text-4xl lg:text-5xl font-bold text-[#1e1e2a] leading-tight mb-8">
          Book Your Next Trip <br /> In 3 Easy Steps
        </h2>

        <div className="space-y-8">
          {/* Step 1 */}
          <div className="flex items-start gap-4">
            <div>
              <img
                src={group1}
                alt="Choose Destination"
                className="w-12 h-12"
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-[#1e1e2a]">
                Choose Destination
              </h3>
              <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start bg-gradient-to-br from-white gap-4">
            <div>
              <img src={group3} alt="Make Payment" className="w-12 h-12" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-[#1e1e2a]">
                Make Payment
              </h3>
              <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-4">
            <div>
              <img src={group3} alt="Reach Airport" className="w-12 h-12" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-[#1e1e2a]">
                Reach Airport on Selected Date
              </h3>
              <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - Trip Card */}
      <div className="flex-1 relative">
        {/* Main Trip Card */}
        <div className="bg-white shadow-lg rounded-3xl shadow-xl shadow-blue-100 p-5 w-[350px] mx-auto">
          <img
            src={greece2}
            alt="Greece"
            className="w-full h-48 rounded-2xl transition-transform duration-300 hover:scale-80 mb-4 object-cover"
          />
          <h3 className="text-lg font-semibold text-[#1e1e2a] mb-1">
            Trip To Greece
          </h3>
          <p className="text-sm text-gray-500 mb-3">
            14–29 June | by Robbin jc
          </p>
          <div className="flex items-center gap-4 mb-3">
            <div className=" bg-gray-100 w-8 h-8 rounded-full justify-center flex items-center">
              <img src={leaf} alt="Leaf Decoration" className=" w-3 h-3" />
            </div>
            <div className=" bg-gray-100 w-8 h-8 rounded-full justify-center flex items-center">
              <img src={map} alt="Leaf Decoration" className=" w-3 h-3" />
            </div>
            <div className=" bg-gray-100 w-8 h-8 rounded-full justify-center flex items-center">
              <img src={send} alt="Leaf Decoration" className=" w-3 h-3" />
            </div>
          </div>
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-2">
              <img
                src={building}
                alt="Building Decoration"
                className="w-6 h-6"
              />
              <p className="text-sm text-gray-500">24 people going</p>
            </div>
            <img src={heart} alt="Heart Decoration" className="w-6 h-6" />
          </div>
        </div>

        {/* Floating Small Card */}
        <div className="absolute -bottom-1 right-10 mb-15 bg-white hover:bg-blue-200  shadow-lg rounded-2xl p-4 w-[240px]">
          <div className="flex items-center gap-3 mb-2">
            <img
              src={greece3}
              alt="Trip to Rome"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-xs text-gray-500">Ongoing</p>
              <h4 className="text-sm font-semibold text-[#1e1e2a]">
                Trip to Rome
              </h4>
            </div>
          </div>

          {/* Progress bar */}
          <p className="text-xs text-gray-500 mb-1">40% completed</p>
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div className="h-2 bg-blue-600 rounded-full w-[40%]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Booking;
