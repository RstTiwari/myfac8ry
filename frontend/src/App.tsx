import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feature from "./Components/Features/Features";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Header/Contact";
import Header from "./Components/Header/Header";
import About from "./Components/HeroSection/About";
import Hero from "./Components/HeroSection/HeroSection";
import Whyus from "./Components/HeroSection/Whyus";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <Whyus />
              <About />
              <Feature />
              <Footer />
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
