import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Feature from "./Components/Features/Features";

import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Header/Contact";
import Header from "./Components/Header/Header";
import About from "./Components/HeroSection/About";
import Hero from "./Components/HeroSection/HeroSection";
import Whyus from "./Components/HeroSection/Whyus";
import Quote from "./Components/Quotes/Quote";
import Sidebar from "./Components/Sidebar";
import { LocalStorageHelper } from "../src/Class/LocalstorageHelper";
import Index from "./Pages/Dashboard/Index";
import { Fragment } from "react/jsx-runtime";
function App() {
    let token = LocalStorageHelper.getToken("token");
    console.log(token,"===")
    return (
        <Router>
            {!token ? (
                <Fragment>
                    <Header />
                    <Routes>
                        <>
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
                            <Route
                                path="*"
                                element={<Navigate to="/" replace />}
                            />
                        </>
                    </Routes>
                </Fragment>
            ) : (
                <Fragment>
                    <Header />
                    <Routes>
                        <Route path="/home" element={<Index />} />
                        <Route path="/quote" element={<Quote />} />
                        <Route path="*" element={<Navigate to="/home" replace />} />
                    </Routes>
                </Fragment>
            )}
        </Router>
    );
}

export default App;
