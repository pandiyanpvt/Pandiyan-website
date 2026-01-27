import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ProcessPage from './pages/ProcessPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import TestimonialsPage from './pages/TestimonialsPage.jsx'
import BranchesPage from './pages/BranchesPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import CareersPage from './pages/CareersPage.jsx'
import CompliancePage from './pages/CompliancePage.jsx'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx'
import TermsOfServicePage from './pages/TermsOfServicePage.jsx'

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <AboutPage />
            </motion.div>
          }
        />
        <Route
          path="/process"
          element={
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ProcessPage />
            </motion.div>
          }
        />
        <Route
          path="/services"
          element={
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ServicesPage />
            </motion.div>
          }
        />
        <Route
          path="/testimonials"
          element={
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <TestimonialsPage />
            </motion.div>
          }
        />
        <Route
          path="/branches"
          element={
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <BranchesPage />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ContactPage />
            </motion.div>
          }
        />
        <Route
          path="/careers"
          element={
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <CareersPage />
            </motion.div>
          }
        />
        <Route
          path="/compliance"
          element={
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <CompliancePage />
            </motion.div>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <PrivacyPolicyPage />
            </motion.div>
          }
        />
        <Route
          path="/terms-of-service"
          element={
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <TermsOfServicePage />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="bg-white text-neutral-900 min-h-screen flex flex-col transition-colors duration-300 overflow-x-hidden">
          <Navbar />
          <main className="flex-grow scroll-smooth overflow-x-hidden">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
