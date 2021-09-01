import React from 'react'
import '../css/global.css'
import '../css/aboutstyle.css'

export default function aboutus() {
    return (
        <section className="aboutbox">
            <div class = "about">
                <h1>About us</h1>
            </div>   
          <div className="container">
            {/* Info boxes */}
            < div className="row">
              <div className="box">
                <div className="box5">
                  <img src="dist/img/goup/mu.png" BORDER ="3"  ></img> 
                  <h2>Mujalin Khattiyanon</h2>
                  <h3>Information Technology</h3>
                </div> 
                </div>
                <div className="box2">
                <div className="box6">
                  <img src="dist/img/goup/non.png" BORDER ="3" ></img>
                    <h2>Khorn Sokheng</h2>
                    <h3>Information Technology</h3>
                </div> 
                </div>
                <div className="box3">
                <div className="box">
                  <img src="dist/img/goup/Ou.png" ></img> 
                   Lapusrada Jonboonruang 
                   <h3> Information Technology </h3>
                </div> 
            </div>
                <div className="box4">
                <div className="box">
                  <img src="dist/img/goup/aum.png" BORDER ="3"  ></img> 
                  <h2> Suchapong Songprakon </h2>
                  <h3> Information Technology </h3>
                </div>
            </div>
            </div> 
            </div>
           
        </section>
        
    )
}
