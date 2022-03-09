import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return ( 
    <div className="nav-item">
       <Link className="nav-link" to='/'>
         Home   
    </Link>
    </div>
    );
}

export default Home;