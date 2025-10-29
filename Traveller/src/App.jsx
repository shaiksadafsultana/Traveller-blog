import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Container from "./Traveller Blog/Container.jsx";
import Navbar from "./Traveller Blog/navbar.jsx";
import Hotels from "./Traveller Blog/hotels/Hotels.jsx";
import Footer from "./Traveller Blog/Footer.jsx";
import Destination from "./Traveller Blog/Destination.jsx";
import Booking from "./Traveller Blog/Booking.jsx";
import Category from "./Traveller Blog/Category.jsx";

function App() {
  return (
    <Router>
      <Navbar />

      <div>
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/hotel" element={<Hotels />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/flights" element={<Category />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
