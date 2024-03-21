import React from "react";
import logo from "../img/ORION_METAVERSE_LOGO.png";
import {Link} from  'react-router-dom';
const Dashboard = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo}  alt="logo" className="logo" />

               <div className="nav-wrppr">
                   <a style={{marginRight:'45px'}} target="_blank" rel="noreferrer"  href="https://vimeo.com/649609917">
                       Teaser trailer
                   </a>
                   <Link to="/data01">Teaser script</Link>

               </div>
            </header>

        </div>
    );
};

export default Dashboard;