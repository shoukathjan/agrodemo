import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Footer from './footer/Footer';
import NavBar from './header/NavBar';
import HomePage from './header/HomePage';
import ContactUs from './Subpages/ContactUs';
import AboutUs from './Subpages/AboutUs';
import Projects from './Subpages/Projects';
import Error404 from './Subpages/Error404';
import SomeMore from './Subpages/SomeMore';


const App = () => {
    return (
    
        <BrowserRouter>
        <div>
         <NavBar/>
         <Route path='/' exact component={HomePage}/>
         <Route path='/aboutus' exact component={AboutUs}/>
         <Route path='/contactus' exact component={ContactUs}/>
         <Route path='/projects' exact component={Projects}/>
         <Route path='/error404' exact component={Error404}/>
         <Route path='/somemore' exact component={SomeMore}/>
         <Footer/>
           
       </div>
       </BrowserRouter> 
  
    
    )
}

export default App;