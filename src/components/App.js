import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import Services from "./Services";
import AboutUs from "./AboutUs";
import LandingPage from "./LandingPage";
import Contact from "./Contact";

function App() {
  const [activePage, setActivePage] = useState("home");

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar activePage={activePage} setActivePage={setActivePage} />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
