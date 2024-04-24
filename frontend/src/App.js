import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './Pages/AboutUs';
import Contactus from './Pages/Contactus';
import Practice from './Pages/Practice';
import Companies from './Pages/Companies';
import Home from './Pages/Home';
import DSA from './Pages/DSA';
import OOP from './Pages/OOP';
import Skills from './Pages/Skills';
import WebDev from './Pages/WebDev'
import Footer from './Components/Footer/Footer';
import Array from './Pages/DSAPages/Array';
import String from './Pages/DSAPages/String';
import Stack from './Pages/DSAPages/Stack';
import Queue from './Pages/DSAPages/Queue';
import Tree from './Pages/DSAPages/Tree';
import Graph from './Pages/DSAPages/Graph';
import LL from './Pages/DSAPages/LL';
import Mastercard from './Pages/CompanyPages/Mastercard';
import Adobe from './Pages/CompanyPages/Adobe';
import Amazon from './Pages/CompanyPages/Amazon';
import Phonepe from './Pages/CompanyPages/PhonePe';
import Barclays from './Pages/CompanyPages/Barclays';
import Trilogy from './Pages/CompanyPages/Trilogy';
import Deutsch from './Pages/CompanyPages/Deutsch';
import Veritas from './Pages/CompanyPages/Veritas';
import Bny from './Pages/CompanyPages/BNY';
import Microsoft from './Pages/CompanyPages/Microsoft';
import Goldman from './Pages/CompanyPages/Goldman';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/dsa" element={<DSA />} />
        <Route path="/oop" element={<OOP />} />
        <Route path="/webd" element={<WebDev />} />
        <Route path="/mastercard" element={<Mastercard />} />
        <Route path="/array" element={<Array />} />
        <Route path="/string" element={<String />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/queue" element={<Queue />} />
        <Route path="/tree" element={<Tree />} />
        <Route path="/graph" element={<Graph />} />
        <Route path="/linkedlist" element={<LL />} />
        <Route path="/mastercard" element={<Mastercard />} />
        <Route path="/adobe" element={<Adobe />} />
        <Route path="/amazon" element={<Amazon />} />
        <Route path="/phonepe" element={<Phonepe />} />
        <Route path="/barclays" element={<Barclays />} />
        <Route path="/trilogy" element={<Trilogy />} />
        <Route path="/deutsch" element={<Deutsch />} />
        <Route path="/veritas" element={<Veritas />} />
        <Route path="/bny" element={<Bny />} />
        <Route path="/microsoft" element={<Microsoft />} />
        <Route path="/goldman" element={<Goldman />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
