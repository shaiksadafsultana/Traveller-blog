import React from "react";
import { CaretLeftOutlined } from "@ant-design/icons";
import Traveller from "../assets/Traveller 1.png";
import Plane from "../assets/plane.svg";
import Category from "./Category";
import Destination from "./Destination";
import Booking from "./Booking";
import Subscription from "./Subscription";
import About from "./About Jadoo"

function Container() {
  return (
    <div>
    <div className=" flex max-w-9xl mt-15 -mb-20 mx-auto px-14 py-10 justify-between ">
      <div
        className="absolute top-0 right-0 w-[60%] h-full bg-[#FFF1DA] -z-10"
        style={{
          clipPath: "circle(80% at 90% 8%)",
        }}
      ></div>

      <div className="py-10">
        <p className=" text-orange-400 text-base font-bold">
          BEST DESTINATION AROUND THE WORLD{" "}
        </p>
        <p className="text-7xl font-bold mb-5 mt-2">
          Travel, enjoy and live a new and full life
        </p>
        <p className="text-[19px] mb-8">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div className="flex  gap-10">
          <button className="bg-orange-400 border rounded-md border-none py-3 px-5 text-white text-lg">
            Find out more
          </button>
          <div className="flex  items-center gap-2 cursor-pointer">
            <p className="border  shadow-xl shadow-orange-300 rounded-full bg-orange-500 border-none py-3 px-4 ">
              <CaretLeftOutlined />
            </p>
            <p>Play Demo</p>
          </div>
        </div>
      </div>
      <div className="absolute top-20 left-90">
        <img src={Plane} className="w-80 h-40 ms-50" alt="Plane" />
      </div>
      <div className="absolute top-50 right-10">
        <img src={Plane} className="w-70 h-40 ms-50" alt="Plane" />
      </div>
      <div className="transition-all flex duration-300 ease-in">
        <img src={Traveller} className="w-600  h-150 pe-30" alt="Traveller" />
      </div>
    </div>
  
 <div>
        <Category />
        <Destination />
        <Booking/>
        <About/>
        <Subscription/>
    </div> 
  </div>
  );
}

export default Container;
