import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./comonents/Navbar";
import FuturePlanning from "./pages/FuturePlanning";
import Home from "./pages/Home";
import InvestmentGuide from "./pages/InvestmentGuide"; 
import MissedOpportunity from "./pages/MissedOpportunity"; 
import Pricing from "./pages/Pricing";
import Report from "./pages/Report";
import Reviews from "./pages/Reviews";
import SuccessStories from "./pages/SuccessStories"; 
import Suggestion from "./pages/Suggestion";
import Tips from "./pages/Tips";
import ContactPage from "./pages/ContactPage";
import Footer from "./comonents/Footer";
import InputUserData from "./pages/InputUserData";
import Signup from "./pages/Signup";
import Login from "./pages/login";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/futurePlanning" element={<FuturePlanning />} />
        <Route path="/" element={<Home />} />
        <Route path="/investmentGuide" element={<InvestmentGuide />} /> 
        <Route path="/missedOpportunity" element={<MissedOpportunity />} /> 
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/report" element={<Report />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/successStories" element={<SuccessStories />} /> 
        <Route path="/suggestion" element={<Suggestion />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/inputUserData" element={<InputUserData/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

