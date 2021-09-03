import { useEffect, useState } from "react"
import '../css/portfolio.scss'
import '../css/global.scss'
import PortfolioList from './PortfolioList';
// import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import LocalMallTwoToneIcon from '@material-ui/icons/LocalMallTwoTone';

import {
    featuredPortfolio, mobilePortfolio, designPortfolio, webPortfolio
} from "../data.js"


export default function Portfolio() {

    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);

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

    useEffect(() => {
        switch(selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "design":
                setData(designPortfolio);
                break;
            default:
                setData(featuredPortfolio);
    }
    }, [selected] );
return (
    <div className="portfolio" id="portfolio">
        <h1><LocalMallTwoToneIcon style={{ fontSize: 50, paddingRight: 10, color: "green" }} />Portfolio </h1>

        <ul>
            {list.map((item) => (

                <PortfolioList
                    title={item.title}
                    active={selected === item.id}
                    setSelected={setSelected}
                    id={item.id}
                />
            ))}
        </ul>
        <div className="container">
            {data.map((d) => (
                <div className="item">
                    <img src= {d.img}
                        alt="image"
                    />
                    <h3>{d.title}</h3>
                </div>

            ))}
            

        </div>


    </div>
)
}
