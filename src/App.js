import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import All from './components/All';
import Footer from './components/Footer';
import PlaceDetails from './components/PlaceDetails';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
              <Home />
          } 
        />
        <Route 
          path="/detail/*"  // Ensure to match any subsequent path after /detail/
          element={
            <div className='min-h-screen flex flex-col relative'>
              <Header />
              <main className='flex-grow w-[70%] -mt-10 align-middle self-center z-20 bg-white shadow-xl h-full text-white'>
                <Routes>
                  <Route path="/" element={<All />} />
                  <Route path=":placeId" element={<PlaceDetails />} />
                </Routes>
              </main>
              <Footer />
            </div>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
