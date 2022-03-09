import React from 'react';
import Banner from '../banner/Banner';
import { Works } from '../bestworks/Works';
import Compatibility from '../compatibility/Compatibility'; 
import Blogs from '../blogs/Blogs';
import News from '../news/News';
import About from '../About';
import Testimonals from '../testimonals/Testimonals';

const HomePage = () => {
    return ( 
        <div>
        <Banner/>
         <About/>
         <Compatibility/>
         <News/>
         <Blogs/>
         <Testimonals/>
         <Works/>

        </div>
     );
}

export default HomePage;