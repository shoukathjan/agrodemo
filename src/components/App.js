import React from 'react';
import About from './About';
import Banner from './banner/Banner';
import { Works } from './bestworks/Works';
import Footer from './footer/Footer';
import NavBar from './navbar/NavBar';

const App = () => {
    return (
    <div>
         <NavBar/>
        <Banner/>
         <About/>
         <Works/>
         <Footer/>
    </div>
    
    )
}

export default App;