import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import OffersSection from "./components/OffersSection";
import TrendingTShirts from "./components/TrendingTShirts";
import FeaturedProduct from "./components/FeaturedProduct";
import PromoBanner from "./components/PromoBanner";
import Collections from "./components/Collections";
import Stylish from "./components/Stylish";
import Features from "./components/Features";
import PromoCards from "./components/PromoCards";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Categories/>
      <OffersSection/>
      <TrendingTShirts/>
      <FeaturedProduct/>
      <PromoBanner/>
      <Collections/>
      <Stylish/>
      <PromoCards/>
      <Features/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;