import React from 'react'
import '../css/global.css'
import '../css/aboutstyle.css'

export default function aboutus() {
    return (

        <div className="content-wrapper">
            <div className ="container-fluid">
            <h1 className ="abus">About Us</h1>

        
        <div className="box01">
            <img className="imgab" src="dist/img/goup/mu.jpg" width="100%"/>
            <h1 className="textab">Name : Mujalin Khattiyanon
            <br/>Nickname : Mulin 
            <br/>Brithday : 28 April
            </h1>
        </div>
       
        <div className="box02">
            <img src="dist/img/goup/oui.jpg"></img>
            <h1 className="textab">Name : Khorn Sokheng 
            <br/>Nickname : Non 
            <br/>Brithday : 
            </h1>
        </div>

        </div>
            <div className = "box03">
            <img src="dist/img/goup/oui.jpg"></img>
            <h1 className="textab">Name : Lapusrada Jonboonruang 
            <br/>Nickname : Oui 
            <br/>Brithday : 2 Jun
            </h1>
        </div>

        <div class="box04">
            <img src="dist/img/goup/Aum.jpg"></img>
            <h1  className="textab">Name : Suchapong Songprakon 
            <br/>Nickname : Aum 
            <br/>Brithday : 25 Nov
            </h1>
        </div>

        <script src="public/js/jquery.js"></script>
        <script src="public/js/slick.min.js"></script>

        <section className="aboutbox">
            <div class = "about">
                <h1>About us</h1>
            </div>   
          <div className="container">
            {/* Info boxes */}
            < div className="row">
              <div className="box">
                <div className="box">
                  <img src="dist/img/goup/mu.png" BORDER ="3"  ></img> 
                  <h2>Mujalin Khattiyanon</h2>
                  <h3>Information Technology</h3>
                </div> 
                </div>
                <div className="box2">
                <div className="box">
                  <img src="dist/img/goup/non.png" BORDER ="3" ></img>
                    <h2>Khorn Sokheng</h2>
                    <h3>Information Technology</h3>
                </div> 
                </div>
                <div className="box3">
                <div className="box">
                  <img src="dist/img/goup/Ou.png" ></img> 
                  <br/>
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
        </div>

        
    )
}
