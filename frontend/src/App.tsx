import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feature from "./Components/Features/Features";

import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Header/Contact";
import Header from "./Components/Header/Header";
import About from "./Components/HeroSection/About";
import Hero from "./Components/HeroSection/HeroSection";
import Whyus from "./Components/HeroSection/Whyus";
import Quote from "./Components/Quotes/Quote"
import { ModalProvider } from "./Context/ModalProvider";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Whyus />
              <About />
              <Feature />
              <Footer />
            </>
          }
        />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </Router>


  );
}

export default App;
