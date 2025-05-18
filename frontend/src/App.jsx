import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header, Footer } from "./components/layout";
import { LandingPage, AddProduct } from "./pages";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
