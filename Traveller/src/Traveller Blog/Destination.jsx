import italy from "../assets/italy.jpg";
import London from "../assets/London.avif";
import europe from "../assets/europe.png";
import navigation from "../assets/navigation.svg";

function Destination() {
  return (
    <section className="py-6 mt-15 bg-white">
      {/* Header Section */}
      <div className="text-center mb-10">
        <p className="text-sm font-semibold text-gray-500 tracking-wider">
          Top Selling
        </p>
        <h2 className="text-4xl font-bold text-[#1e1e2a] mt-2">
          Top Destinations
        </h2>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-20 px-10">
        {/* Card 1 */}
       <div className="relative max-w-[300px] rounded-2xl hover:shadow-pink-300 shadow-sm hover:!shadow-lg transition">
          <img src={italy} alt="Rome" className="w-full h-full transition-transform duration-300 hover:scale-105 object-cover rounded-2xl mb-6"/>
           <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white bg-opacity-90 rounded-xl px-4 py-3 w-[90%] z-10 text-center">
            <div className="flex justify-between text-[#1e1e2a] font-semibold mb-4">
              <h3>Rome, Italy</h3>
              <p>$5.42K</p>
            </div>
            <div className="flex items-center justify-start gap-2 text-gray-500 text-sm">
              <img src={navigation} alt="navigation" className="w-4 h-4" />
              <p >10 Days Trip</p>
            </div>
           </div>
        </div>

        {/* Card 2 */}
        <div className="relative max-w-[300px] rounded-2xl  shadow-sm hover:shadow-orange-300 hover:!shadow-lg transition bg-white">
          <img src={London} alt="Rome" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 rounded-2xl mb-6"/>
           <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white bg-opacity-90 rounded-xl px-4 py-3 w-[90%] z-10 text-center">
            <div className="flex justify-between text-[#1e1e2a] font-semibold mb-4">
              <h3>London, UK</h3>
              <p>$4.2K</p>
            </div>
            <div className="flex items-center justify-start gap-2 text-gray-500 text-sm">
              <img src={navigation} alt="navigation" className="w-4 h-4" />
              <p >12 Days Trip</p>
            </div>
           </div>
        </div>

        {/* Card 3 */}
       <div className="relative max-w-[300px] rounded-2xl shadow-sm hover:shadow-blue-300 hover:!shadow-lg transition bg-white">
          <img src={europe} alt="Rome" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 rounded-2xl mb-6"/>
           <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white bg-opacity-90 rounded-xl px-4 py-3 w-[90%] z-10 text-center">
            <div className="flex justify-between text-[#1e1e2a] font-semibold mb-4">
              <h3>Full Europe</h3>
              <p>$15K</p>
            </div>
            <div className="flex items-center justify-start gap-2 text-gray-500 text-sm">
              <img src={navigation} alt="navigation" className="w-4 h-4" />
              <p >28 Days Trip</p>
            </div>
           </div>
        </div>
      </div>
    </section>
  );
}

export default Destination;
