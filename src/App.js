import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home.js";
import Services from "./components/pages/Services.js";
import Products from "./components/pages/Products.js";
import SignUp from "./components/pages/SignUp.js";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/services" Component={Services} />
          <Route path="/products" Component={Products} />
          <Route path="/sign-up" Component={SignUp} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
