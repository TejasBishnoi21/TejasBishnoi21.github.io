import React from "react";
import About from "./Components/About";
import BacktoTop from "./Components/BacktoTopBtn";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import GithubStats from "./Components/GithubStats";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills";
import Tools from "./Components/Tools";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Tools />
      <Portfolio />
      <GithubStats />
      <Contact />
      <Footer />
      <BacktoTop />
    </div>
  );
};

export default App;
