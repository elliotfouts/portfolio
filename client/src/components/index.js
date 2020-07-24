import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Work from './Work';
import Contact from './Contact';

const Index = () => {
  return (
    <div>    
      <Navbar>
        <Home/>
        <Work/>
        <Contact/>
      </Navbar>
    </div>
  )
}

export default Index;