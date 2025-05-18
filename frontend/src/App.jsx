import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Header, Footer } from "./components/layout";
import { LandingPage, AddProduct, SignUp, Login, EditProduct } from "./pages";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/edit-product/:id" element={<EditProductWrapper />} />
      </Routes>
      <Footer />
    </Router>
  );
};

// Wrapper to get product from location state
function EditProductWrapper() {
  const { state } = useLocation();
  const navigate = useNavigate();
  if (!state || !state.product) {
    // If no product in state, redirect to home
    navigate("/", { replace: true });
    return null;
  }
  return <EditProduct product={state.product} />;
}

export default App;
