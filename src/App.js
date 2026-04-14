import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import SubFooter from "./components/SubFooter";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Products />
      <ProductDetails />
      <SubFooter />
      <Footer />
    </>
  );
}

export default App;