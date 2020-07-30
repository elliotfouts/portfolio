import React from 'react';
// import Navbar from './Navbar';
import Landing from './Landing';
import SelectedWork from './SelectedWork';
import Footer from '../Footer';

const Index = () => {
  return (
    <div>    
      {/* <Navbar> */}
        <div> 
          <Landing/>
          <SelectedWork/>
          <Footer/>
        </div>
      {/* </Navbar> */}
    </div>
  )
}

export default Index;