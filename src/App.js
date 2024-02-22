import React from 'react';
import Header from './components/header'
import Main from './components/main';
import Footer from './components/footer';
import CustomCursor from './components/cursor';
import './styles/fonts.css';
import './styles/style.css';

function App() {
  return (
    <div>
      <CustomCursor />
      <Header />
      <hr />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
