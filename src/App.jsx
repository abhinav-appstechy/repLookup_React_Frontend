import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import SearchSection from "./components/SearchSection";
import ScrollToTop from "react-scroll-to-top";
import { Route, Link, Routes, Navigate } from "react-router-dom";
import Homepage from "./components/Homepage";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Header />
      <Routes>
        
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
      <ScrollToTop smooth style={{ padding: "6px" }} />
      <Footer />
    </>
  );
}

export default App;
