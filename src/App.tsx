import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import CasesPage from './pages/CasesPage';
import ContactPage from './pages/ContactPage';
import SoftwareDevelopmentPage from './pages/SoftwareDevelopmentPage';
import CloudServicesPage from './pages/CloudServicesPage';
import DataServicesPage from './pages/DataServicesPage';
import OSSupportPage from './pages/OSSupportPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/software-development" element={<SoftwareDevelopmentPage />} />
            <Route path="/services/cloud-services" element={<CloudServicesPage />} />
            <Route path="/services/data-services" element={<DataServicesPage />} />
            <Route path="/services/os-support" element={<OSSupportPage />} />
            <Route path="/cases" element={<CasesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
