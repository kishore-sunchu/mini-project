import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container h-auto bg-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
