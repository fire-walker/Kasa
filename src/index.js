import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import AboutUs from "./pages/AboutUs";
import Error from "./pages/Error";
import Header from './components/Header';
import Footer from "./components/Footer";
import '../src/sass/_index.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/error" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>
);
