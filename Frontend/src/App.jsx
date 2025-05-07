import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import "./index.css";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Productspage from "./pages/Productspage";
import styled, { keyframes } from "styled-components";
import ClientStories from "./pages/Clientstories";
// Animations
const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(0.5); opacity: 0.5; }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Styled components
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
  gap: 15px;
  margin-bottom: 30px;
`;

const Box = styled.div.attrs((props) => ({
  delay: props.delay || 0,
}))`
  width: 30px;
  height: 30px;
  background: #fff;
  animation: ${pulse} 1.5s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
`;

const LoadingText = styled.h1`
  color: #fff;
  font-size: 2.5rem;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  margin-bottom: 10px;
  animation: ${fadeIn} 1s ease-in;
`;

const SubText = styled.p`
  color: #aaa;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  animation: ${fadeIn} 1s ease-in;
`;

// Box animation component
const BoxLoader = () => {
  return (
    <LoaderContainer>
      <BoxGrid>
        {[...Array(9)].map((_, i) => (
          <Box key={i} delay={i * 0.1} />
        ))}
      </BoxGrid>
      <LoadingText>Cartonize</LoadingText>
      <SubText>Packaging Solutions</SubText>
    </LoaderContainer>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <BoxLoader />
      ) : (
        <>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/client-stories" element={<ClientStories />} />
              <Route path="/client-stories/1" element={<ClientStories />} />
              <Route path="/client-stories/2" element={<ClientStories />} />
              <Route path="/client-stories/3" element={<ClientStories />} />
              <Route path="/client-stories/4" element={<ClientStories />} />
              <Route path="/client-stories/5" element={<ClientStories />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/productspage" element={<Productspage />} />
              <Route path="/products/:productId" element={<Productspage />} />
            </Routes>
          </Router>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
