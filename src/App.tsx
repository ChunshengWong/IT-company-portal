import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import InfrastructurePage from './pages/InfrastructurePage';
import SecurityPage from './pages/SecurityPage';
import ProductsPage from './pages/ProductsPage';
import CasesPage from './pages/CasesPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/infrastructure" element={<InfrastructurePage />} />
            <Route path="/security" element={<SecurityPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/cases" element={<CasesPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
