import React, { useState } from "react";

import hotel1 from "../../assets/hotels/hotel3.png";
import hotel2 from "../../assets/hotels/hotel2.png";
import hotel3 from "../../assets/hotels/hotel1.png";
import hotel4 from "../../assets/hotels/hotel4.png";
import hotel5 from "../../assets/hotels/hotel5.png";
import hotel6 from "../../assets/hotels/hotel6.png";
import hotel7 from "../../assets/hotels/hotel7.png";
import hotel8 from "../../assets/hotels/hotel8.png";
import hotel9 from "../../assets/hotels/hotel9.png";
import hotel10 from "../../assets/hotels/hotel10.png";
import hotel11 from "../../assets/hotels/hotel11.png";
import hotel12 from "../../assets/hotels/hotel12.png";
import hotel13 from "../../assets/hotels/hotel13.png";
import hotel14 from "../../assets/hotels/hotel14.png";
import hotel15 from "../../assets/hotels/hotel15.png";
import navigation from "../../assets/navigation.svg";

function Hotels() {
  const hotelCategories = [
    {
      region: "Europe",
      color: "hover:shadow-purple-200",
      hotels: [
        {
          name: "Grand Europe Palace",
          location: "Paris, France",
          desc: "Luxury hotel with Eiffel Tower views and fine dining.",
          price: "$320 / night",
          img: hotel1,
        },
        {
          name: "Royal Continental",
          location: "Berlin, Germany",
          desc: "Modern comfort in the heart of Berlin’s cultural district.",
          price: "$270 / night",
          img: hotel2,
        },
        {
          name: "Swiss Haven Resort",
          location: "Zurich, Switzerland",
          desc: "Mountain-view suites with private balconies and spas.",
          price: "$310 / night",
          img: hotel3,
        },
        {
          name: "Vienna Classic",
          location: "Vienna, Austria",
          desc: "Elegant stay near historical landmarks and museums.",
          price: "$290 / night",
          img: hotel4,
        },
        {
          name: "Mediterraneo Suites",
          location: "Barcelona, Spain",
          desc: "Beachfront stay with sea views and Mediterranean cuisine.",
          price: "$280 / night",
          img: hotel5,
        },
      ],
    },
    {
      region: "Italy",
      color: "hover:shadow-pink-200",
      hotels: [
        {
          name: "Hotel Roma Elegance",
          location: "Rome, Italy",
          desc: "Elegant hotel minutes from the Colosseum and Trevi Fountain.",
          price: "$290 / night",
          img: hotel6,
        },
        {
          name: "Venice Waterfront Suites",
          location: "Venice, Italy",
          desc: "Canal-side rooms with breathtaking views and gondola access.",
          price: "$310 / night",
          img: hotel7,
        },
        {
          name: "Florence Grand",
          location: "Florence, Italy",
          desc: "Art-inspired hotel near the Uffizi Gallery and Duomo.",
          price: "$270 / night",
          img: hotel8,
        },
        {
          name: "Napoli Coast Resort",
          location: "Naples, Italy",
          desc: "Coastal retreat with spa, infinity pool, and ocean dining.",
          price: "$320 / night",
          img: hotel9,
        },
        {
          name: "Tuscany Hilltop Inn",
          location: "Tuscany, Italy",
          desc: "Countryside charm with vineyards and fine Italian cuisine.",
          price: "$250 / night",
          img: hotel10,
        },
      ],
    },
    {
      region: "London",
      color: "hover:shadow-blue-200",
      hotels: [
        {
          name: "The London Crown",
          location: "London, UK",
          desc: "Iconic luxury hotel with royal design and 5-star dining.",
          price: "$340 / night",
          img: hotel1,
        },
        {
          name: "Parkside Regency",
          location: "London, UK",
          desc: "Steps from Hyde Park with contemporary interiors.",
          price: "$300 / night",
          img: hotel2,
        },
        {
          name: "The Grand Mayfair",
          location: "London, UK",
          desc: "Boutique hotel blending heritage and modern style.",
          price: "$310 / night",
          img: hotel3,
        },
        {
          name: "Westminster View",
          location: "London, UK",
          desc: "Panoramic city views and world-class British cuisine.",
          price: "$330 / night",
          img: hotel4,
        },
        {
          name: "The Savoy Edge",
          location: "London, UK",
          desc: "Timeless elegance by the Thames with luxury service.",
          price: "$350 / night",
          img: hotel5,
        },
      ],
    },
    {
      region: "Greece",
      color: "hover:shadow-orange-200",
      hotels: [
        {
          name: "Santorini Bliss Resort",
          location: "Santorini, Greece",
          desc: "Cliffside resort with sea-view pools and whitewashed villas.",
          price: "$250 / night",
          img: hotel11,
        },
        {
          name: "Athens Central Suites",
          location: "Athens, Greece",
          desc: "Modern stay minutes away from the Acropolis.",
          price: "$220 / night",
          img: hotel12,
        },
        {
          name: "Mykonos Pearl Hotel",
          location: "Mykonos, Greece",
          desc: "Luxury beach resort with private cabanas and spa.",
          price: "$280 / night",
          img: hotel13,
        },
        {
          name: "Rhodes Heritage Inn",
          location: "Rhodes, Greece",
          desc: "Historic charm meets comfort in old-town Rhodes.",
          price: "$210 / night",
          img: hotel14,
        },
        {
          name: "Crete Horizon Resort",
          location: "Crete, Greece",
          desc: "Ocean-view suites with island-style architecture.",
          price: "$260 / night",
          img: hotel15,
        },
      ],
    },
  ];

  // ✅ Store selected hotel index for each category
  const [selectedHotels, setSelectedHotels] = useState(
    hotelCategories.map((cat) => cat.hotels[0])
  );

  const handleHotelSelect = (categoryIndex, hotel) => {
    const newSelections = [...selectedHotels];
    newSelections[categoryIndex] = hotel;
    setSelectedHotels(newSelections);
  };

  return (
    <section id="hotels" className="py-6 mt-20 bg-gray-50">
      <div className="text-center mb-12">
        <p className="text-sm font-semibold text-gray-500 tracking-wider">
          Handpicked Stays
        </p>
        <h2 className="text-4xl font-bold text-[#1e1e2a] mt-2">
          Explore Hotels by Region
        </h2>
      </div>

      {hotelCategories.map((category, i) => {
        const selectedHotel = selectedHotels[i];

        return (
          <div key={i} className="mb-16">
            <h3 className="text-2xl font-bold text-[#1e1e2a] mb-8 text-center">
              {category.region}
            </h3>

            <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-6 md:px-10">
              {/* Left side - hotel list */}
              <div className="flex flex-col gap-5 w-full md:w-[40%]">
                {category.hotels.map((hotel, index) => (
                  <div
                    key={index}
                    onClick={() => handleHotelSelect(i, hotel)}
                    className={`flex gap-4 items-center bg-white rounded-2xl overflow-hidden shadow-sm p-3 cursor-pointer transition-all duration-300 hover:shadow-md ${
                      selectedHotel.name === hotel.name
                        ? "ring-2 ring-yellow-400"
                        : category.color
                    }`}
                  >
                    <img
                      src={hotel.img}
                      alt={hotel.name}
                      className="w-28 h-20 object-cover rounded-xl border border-gray-100 shadow-sm"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-[#1e1e2a]">
                        {hotel.name}
                      </h4>
                      <p className="text-sm text-gray-500">{hotel.location}</p>
                      <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                        {hotel.desc}
                      </p>
                      <p className="text-sm font-semibold text-yellow-600 mt-1">
                        {hotel.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right side - main hotel preview (center aligned) */}
              <div className="w-full md:w-[40%] flex justify-center">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-md">
                  <div className="w-full h-[340px] overflow-hidden">
                    <img
                      src={selectedHotel.img}
                      alt={selectedHotel.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-6 text-center">
                    <h4 className="text-2xl font-bold text-[#1e1e2a]">
                      {selectedHotel.name}
                    </h4>
                    <div className="flex justify-center items-center gap-2 text-gray-500 mt-1">
                      <img
                        src={navigation}
                        alt="location"
                        className="w-4 h-4"
                      />
                      <p>{selectedHotel.location}</p>
                    </div>
                    <p className="text-gray-600 mt-2">{selectedHotel.desc}</p>
                    <p className="text-lg font-semibold text-yellow-600 mt-3">
                      {selectedHotel.price}
                    </p>

                    <button className="mt-5 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded-full transition">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Hotels;
