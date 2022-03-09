import React from "react";
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className="nav-item mx-lg-4 my-lg-0 my-3">
      <Link className="nav-link" to='/projects'>
         Projects  
    </Link>
    </div>
  );
};

export default Projects;
