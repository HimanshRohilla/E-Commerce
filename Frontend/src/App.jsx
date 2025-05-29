import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./index.css";
import ReactGA from "react-ga4";

// Pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Productspage from "./pages/Productspage";
import ClientStories from "./pages/ClientStories";
import Process from "./pages/Process";
import Sustainability from "./pages/Sustainability";
import Faq from "./pages/Faq";
import PackagingGuide from "./pages/PackagingGuide";
import DesignTips from "./pages/DesignTips";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import ShippingPolicy from "./pages/ShippingPolicy";
import Returns from "./pages/Returns";

// Google Analytics ID
const GA_MEASUREMENT_ID = "G-K6Z2Y06M4Q"; 

// Initialize Google Analytics once
ReactGA.initialize(GA_MEASUREMENT_ID);

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(0.85); opacity: 0.6; }
`;

const fadeInText = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`;

const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const BoxGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 25px;
`;

const Box = styled.div.attrs(props => ({
  delay: props.delay || "0s",
}))`
  width: 28px;
  height: 28px;
  background: #fff;
  border-radius: 4px;
  animation: ${pulse} 1.0s infinite;
  animation-delay: ${props => props.delay};
`;

const LoadingText = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 2.4rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
  animation: ${fadeInText} 0.6s ease forwards;
  animation-delay: 0.5s;
  opacity: 0;
`;

const SubText = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  color: #aaa;
  margin-top: 8px;
  animation: ${fadeInText} 0.6s ease forwards;
  animation-delay: 0.7s;
  opacity: 0;
`;

// Custom hook to track page views on route change
function usePageTracking() {
  const location = useLocation();
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);
}

function AppContent() {
  usePageTracking();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/client-stories" element={<ClientStories />} />
        <Route path="/client-stories/:id" element={<ClientStories />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/productspage" element={<Productspage />} />
        <Route path="/products/:productId" element={<Productspage />} />
        <Route path="/process" element={<Process />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/packaging-guide" element={<PackagingGuide />} />
        <Route path="/design-tips" element={<DesignTips />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/returns" element={<Returns />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const doneTimeout = setTimeout(() => setIsLoading(false), 2800);
    return () => clearTimeout(doneTimeout);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <LoaderContainer>
          <BoxGrid>
            {[...Array(9)].map((_, i) => (
              <Box key={i} delay={`${i * 0.1}s`} />
            ))}
          </BoxGrid>
          <LoadingText>Cartonize</LoadingText>
          <SubText>Premium Packaging Solutions</SubText>
        </LoaderContainer>
      ) : (
        <Router>
          <AppContent />
        </Router>
      )}
    </div>
  );
}

export default App;
