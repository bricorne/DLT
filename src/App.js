import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChampionList from './components/ChampionList';
import ChampionDetails from './components/ChampionDetails';
import Header from './components/header'
import Footer from './components/footer';
import CustomCursor from './components/cursor';
import './styles/fonts.css';
import './styles/style.css';

function App() {
  return (
    <React.StrictMode>
      <Router>
        <CustomCursor />
        <Header />
        <hr />
        <main>
          <Routes>
            <Route path="/" element={<ChampionList />} />
            <Route path="/champion/:name" element={<ChampionDetails />} />
            {/* Ajoutez d'autres routes ici */}
          </Routes>
        </main>
        <Footer />
      </Router>
    </React.StrictMode>
  );
}

export default App;
