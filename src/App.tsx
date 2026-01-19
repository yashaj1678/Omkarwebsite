import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import SEO from './components/SEO';

// Lazy load components
const Hero = lazy(() => import('./components/Hero'));
const HomeServices = lazy(() => import('./components/HomeServices'));
const Services = lazy(() => import('./components/Services'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));
const About = lazy(() => import('./components/About'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const HomeTeam = lazy(() => import('./components/HomeTeam'));
const Contact = lazy(() => import('./components/Contact'));
const Team = lazy(() => import('./components/Team'));
const HomeContact = lazy(() => import('./components/HomeContact'));
const Documents = lazy(() => import('./components/Documents'));
const Valuation = lazy(() => import('./components/Valuation'));

function HomePage() {
  return (
    <>
      <SEO 
        title="Property Registration Services in Mumbai & Pune"
        description="Om Estate Services - Your trusted partner for property document registration in Mumbai, Pune, and major metro cities. Expert assistance in property registration, transfer, and documentation."
        keywords="property registration, document registration, property transfer, Mumbai real estate, Pune real estate"
      />
      <Suspense fallback={<LoadingSpinner />}>
        <Hero />
        <HomeServices />
        <HowItWorks />
        <About />
        <Testimonials />
        <HomeTeam />
        <HomeContact />
      </Suspense>
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16" style={{ minHeight: 'calc(100vh - 80px)' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route 
              path="/services" 
              element={
                <>
                  <SEO 
                    title="Our Services - Property Registration & Documentation"
                    description="Comprehensive property registration services including document verification, transfer assistance, and legal documentation support in Mumbai and Pune."
                    keywords="property registration services, document verification, property transfer, legal documentation"
                  />
                  <Suspense fallback={<LoadingSpinner />}>
                    <Services />
                  </Suspense>
                </>
              } 
            />
            <Route 
              path="/why-om" 
              element={
                <>
                  <SEO 
                    title="Why Choose Om Estate Services"
                    description="20+ years of experience in property registration, 15,000+ happy clients, and expert staff dedicated to making your property registration process seamless."
                    keywords="property registration experts, real estate services, Mumbai property registration"
                  />
                  <Suspense fallback={<LoadingSpinner />}>
                    <About />
                  </Suspense>
                </>
              } 
            />
            <Route 
              path="/team" 
              element={
                <>
                  <SEO 
                    title="Our Expert Team"
                    description="Meet our experienced team of property registration experts dedicated to providing you with the best service in Mumbai and Pune."
                    keywords="property experts, real estate team, professional staff"
                  />
                  <Suspense fallback={<LoadingSpinner />}>
                    <Team />
                  </Suspense>
                </>
              } 
            />
            <Route 
              path="/contact" 
              element={
                <>
                  <SEO 
                    title="Contact Us"
                    description="Get in touch with Om Estate Services for all your property registration needs in Mumbai, Pune, and other major cities."
                    keywords="contact property registration, real estate services contact"
                  />
                  <Suspense fallback={<LoadingSpinner />}>
                    <Contact />
                  </Suspense>
                </>
              } 
            />
            <Route 
              path="/documents" 
              element={
                <>
                  <SEO 
                    title="Document Templates & Guidelines"
                    description="Access our comprehensive collection of property document templates and guidelines for various property-related transactions."
                    keywords="property documents, legal templates, registration guidelines"
                  />
                  <Suspense fallback={<LoadingSpinner />}>
                    <Documents />
                  </Suspense>
                </>
              } 
            />
            <Route 
              path="/valuation" 
              element={
                <>
                  <SEO 
                    title="Property Valuation Services"
                    description="Professional property valuation services for residential and commercial properties in Mumbai and Pune. Get accurate market value assessments from certified experts."
                    keywords="property valuation, real estate valuation, market value assessment"
                  />
                  <Suspense fallback={<LoadingSpinner />}>
                    <Valuation />
                  </Suspense>
                </>
              } 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}