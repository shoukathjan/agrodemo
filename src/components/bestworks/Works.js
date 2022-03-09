import React from "react";
import "../css/style.css";
//import "../css/fontawesome-all.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAppleAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faSkyatlas,
  faApple,
  faYelp,
  faViadeo,
  faPagelines,
} from "@fortawesome/free-brands-svg-icons";

export const Works = () => {
  return (
    <div className="serives-agile pb-5" id="works">
      <div className="container pb-xl-5 pb-lg-3">
        <h3 className="tittle mb-xl-5 mb-4 text-dark text-center">
          <span className="text-uppercase">our</span>Best Works
        </h3>
        <div className="d-flex welcome-bottom text-center">
          <div className="welcome-grid">
            <i className="fab">
              <FontAwesomeIcon icon={faApple} />
            </i>
            <h4 className="my-3">Heading Here</h4>
            <p>quis nostrum ullam corporis suscipit.</p>
          </div>
          <div className="welcome-grid">
            <i className="fab ">
              <FontAwesomeIcon icon={faSkyatlas} />
            </i>
            <h4 className="my-3">Heading Here</h4>
            <p>quis nostrum ullam corporis suscipit.</p>
          </div>

          <div className="welcome-grid">
            <i className="fab ">
              <FontAwesomeIcon icon={faYelp} />
            </i>
            <h4 className="my-3">Heading Here</h4>
            <p>quis nostrum ullam corporis suscipit.</p>
          </div>
          <div className="welcome-grid">
            <i className="fab ">
              <FontAwesomeIcon icon={faViadeo} />
            </i>
            <h4 className="my-3">Heading Here</h4>
            <p>quis nostrum ullam corporis suscipit.</p>
          </div>
          <div className="welcome-grid">
            <i className="fab ">
              <FontAwesomeIcon icon={faPagelines} />
            </i>
            <h4 className="my-3">Heading Here</h4>
            <p>quis nostrum ullam corporis suscipit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
