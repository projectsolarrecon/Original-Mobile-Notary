import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import SEO from "./components/SEO";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceArea from "./pages/ServiceArea";
import Pricing from "./pages/Pricing";
import WhyChooseUs from "./pages/WhyChooseUs";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <SEO />
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service-area" element={<ServiceArea />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        {/* IMPORTANT: DO NOT place any routes below this. */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
