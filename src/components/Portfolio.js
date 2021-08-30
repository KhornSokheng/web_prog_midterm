import React from 'react'
import '../css/portfolio.scss'
import '../css/global.css'

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                <li className="active">Featured</li>
                <li>Web App</li>
                <li>Mobile App</li>
                <li>Branding</li>
            </ul>
            <div className="container">
                <div className="item">
                    <img src="https://freshvanroot.com/wp-content/uploads/2020/12/Adalo-App-post-blog-featured-picture-1024x512.png" 
                    alt=""
                    />
                    <h3>App Template</h3>
                </div>
                <div className="item">
                    <img src="https://global-uploads.webflow.com/5d123a0e13543962b1665276/5f6e18402b0a48166ee7e8ac_Cloneableshareimages-03.png" 
                    alt=""
                    />
                    <h3>App Template</h3>
                </div>
                <div className="item">
                    <img src="https://makewebbetter.com/wp-content/uploads/2018/08/appro.jpg" 
                    alt=""
                    />
                    <h3>App Template</h3>
                </div>
                <div className="item">
                    <img src="https://freshvanroot.com/wp-content/uploads/2020/12/Adalo-App-post-blog-featured-picture-1024x512.png" 
                    alt=""
                    />
                    <h3>App Template</h3>
                </div>
                <div className="item">
                    <img src="https://freshvanroot.com/wp-content/uploads/2020/12/Adalo-App-post-blog-featured-picture-1024x512.png" 
                    alt=""
                    />
                    <h3>App Template</h3>
                </div>
                <div className="item">
                    <img src="https://freshvanroot.com/wp-content/uploads/2020/12/Adalo-App-post-blog-featured-picture-1024x512.png" 
                    alt=""
                    />
                    <h3>App Template</h3>
                </div>
                
            </div>
            
            
        </div>
    )
}
