import {useEffect, useState} from "react"
import '../css/portfolio.scss'
import '../css/global.scss'
import PortfolioList from './PortfolioList';
// import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import LocalMallTwoToneIcon from '@material-ui/icons/LocalMallTwoTone';



export default function Portfolio() {

    const [selected, setSelected] = useState("featured");

    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "mobile",
            title: "Mobile App",
        },
        {
            id: "design",
            title: "Design",
        },
    ];
    return (
        <div className="portfolio" id="portfolio">
            <h1><LocalMallTwoToneIcon style={{ fontSize: 50, color: "green"} }/>Portfolio </h1>
            
            <ul>
                {list.map((item) => (
                    
                    <PortfolioList 
                    title={item.title} 
                    active = {selected === item.id}
                    setSelected={setSelected}
                    id = {item.id}
                    />
                ))}
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
                    <img src="http://unblast.com/wp-content/uploads/2020/04/Bank-App-Concept-Template-1.jpg" 
                    alt=""
                    />
                    <h3>App Template</h3>
                </div>
                <div className="item">
                    <img src="https://themeforest.img.customer.envatousercontent.com/files/265987969/preview.__large_preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=26b44871115f07f13b627c0f623d8e29" 
                    alt=""
                    />
                    <h3>App Template</h3>
                </div>
                <div className="item">
                    <img src="https://themeforest.img.customer.envatousercontent.com/files/245218462/preview.__large_preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=063153b0e8700256fe3739d0aa8febee" 
                    alt=""
                    />
                    <h3>App Template</h3>
                </div>
                
            </div>
            
            
        </div>
    )
}
