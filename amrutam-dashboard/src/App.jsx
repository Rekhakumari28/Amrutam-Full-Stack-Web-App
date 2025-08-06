import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";

import Header from "./components/Header";
import Shop from "./pages/Shop.jsx";
import Forum from "./pages/Forum.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/shop" element={<Shop />} />
        <Route path="/forum" element={<Forum />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
