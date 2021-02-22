import React from "react";
import Typed from "react-typed"; //for typing text, install npm first

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Web design and Software development</h1>
                <Typed 
                 className="typed-text"
                 strings={["Web Design", "Software Development", "Database Managment"]}
                 typeSpeed={40}
                 backSpeed={60}
                 loop
                />
                <a href="#" className="btn-main-offer">Contact Me</a>
            </div>
            
        </div>
    )
}

export default Header
