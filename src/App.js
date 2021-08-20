import React, { Component } from 'react';
import Navbar from './componentes/navbar';
import Footer from './componentes/footer';
import Home from './componentes/home';
import Services from './componentes/services';
import Portfolio from './componentes/portfolio';
import Contact from './componentes/contact';

class App extends Component {
  render(){
    return(
      <div className="App"> 
      
      <Navbar/>
      <Home/>
      <Portfolio/>
      <Services/>
      <Contact/>
      <Footer/>

      </div>
    );
  }
}
export default App;
