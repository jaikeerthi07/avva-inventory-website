import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LiveDemo from './pages/LiveDemo';

const Home = () => (
  <main>
    <HeroSection />
    <FeaturesSection />
    <PricingSection />
    <ContactSection />
  </main>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/live-demo" element={<LiveDemo />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
