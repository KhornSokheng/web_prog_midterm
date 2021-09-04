import React from 'react'
import { Link } from "react-router-dom";
import '../css/global.scss'
import '../css/aboutstyle.css'


export default function aboutus() {
  return (
    <div className="content-wrapper">
      <div className="about-section">
        <h1>About Us </h1>
      </div>

      <div className="bg">
        <div className="row">
          
          <div className="card" style={{ width: "30rem" }}>
            <img className="card-img-top" src="/dist/img/goup/mu.jpg" alt="Card image cap" />
            <div className="card-body">
              <h1 className="card-text">Mujalin Khattiyanon 
              <br/>
              (Mulin)</h1>
              <br/>
              <p className="card-t">CEO</p>
              <Link to="/contectus" className="nav-link">                                                                  
                <a href="#" className="btn btn-primary">
                  Hire Me
                </a>
              </Link>
            </div>
          </div>
          
          <div className="card" style={{ width: "30rem" }}>
            <img className="card-img-top" src="/dist/img/goup/non.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-text">Khorn Sokheng 
              <br/>
              (Non)</h5>
              <br/>
              <p className="card-t">Art Director</p>
              <Link to="/contectus" className="nav-link">                                                                  
                <a href="#" className="btn btn-primary">
                  Hire Me
                </a>
              </Link>
              
            </div>
          </div>
          
          <div className="card" style={{ width: "30rem" }}>
            <img className="card-img-top" src="/dist/img/goup/aum.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-text">Suchapong Songprakon <br/>(Aum)</h5>
              <br/>
              <p className="card-t">Designer</p>
              <Link to="/contectus" className="nav-link">                                                                  
                <a href="#" className="btn btn-primary">
                  Hire Me
                </a>
              </Link>
            </div>
          </div>
          
          <div className="card" style={{ width: "30em" }}>
            <img className="card-img-top" src="/dist/img/goup/oui.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-text">Lapusrada Jonboonruang 
              <br/>(Oui)</h5>
              <p className="card-t">Unemployed</p>
              <Link to="/contectus" className="nav-link">                                                                  
                <a href="#" className="btn btn-primary">
                  Hire Me
                </a>
              </Link>
            </div>
          </div>
        

      </div>
    </div>
    </div>
  );
}

    