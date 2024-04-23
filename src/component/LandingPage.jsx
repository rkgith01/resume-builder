// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Hero from "./Hero";
import Features from "./Features";
import ResumePage from "./ResumePage";
import Footer from "./Footer";
import FaqPage from "./FaqPage";

const LandingPage = () => {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Hero />
                  <Features />
                  <FaqPage/>
                </div>
              }
            />
            <Route path="/resume-edit" element={<ResumePage/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default LandingPage;
