import React from "react";
import googlepay from "../assets/Google Play.svg";
import appstore from "../assets/Play Store.svg";
import { CiFacebook } from "react-icons/ci";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

const Foot = [
  {
    tittle: "Company",
    links: ["About", "Careers", "Mobile"],
  },
  {
    tittle: "Contact",
    links: ["Help/FAQ", "Press", "Affilates"],
  },
  {
    tittle: "More",
    links: ["Airlinefees", "Airline", "Low fare tips"],
  },
];

export default function Footer() {
  return (
    <div>
      <footer className=" border-t border-gray-100 bg-gray-200 py-12 mt-10">
        <div className=" flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 gap-8 flex-col md:flex-row md:justify-between">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Jadoo</h2>
            <p className="text-gray-600 mb-8">
              Book your trip in minutes, get full <br /> control for much
              longer.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 ml-30">
            {Foot.map((section, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-black-400 mb-3">
                  {section.tittle}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-gray-600 hover:text-gray-800">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="ml-20 text-center">
            <div className="flex gap-4 mb-3 text-2xl text-black-400 justify-center">
             <CiFacebook className="cursor-pointer hover:text-blue-600" />
            <FaInstagram className="cursor-pointer hover:text-pink-600" />
            <AiFillTwitterCircle className="cursor-pointer hover:text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold leading-none text-gray-700 mb-2">
              Discover our app
            </h3>
            <div className="flex justify-center gap-3">
            <img
              src={googlepay}
              alt="Google Play"
              className="h-10 w-18 cursor-pointer"
            />
            <img
              src={appstore}
              alt="App Store"
              className="h-12 w-18 cursor-pointer"
            />
          </div>
          </div>
        </div>
        <div className=" mt-5 text-center">
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-800">All rights reserved</span> @jadoo.co {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
