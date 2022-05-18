import './App.css';
import React from 'react';
import Info from './Info';
import About from './About';
import  Footer  from './Footer';
import Interests from './Interests';
function App() {
  return (
    <div className='Main'>
    <Info/>
    <About/>
    <Interests/>
    <Footer></Footer>
    </div>
  );
}

export default App;
