import React from "react";
import './style.css';


const Header = ( {title} ) => {
    return (
        <>   
            <header className="header">
			    <h1 className="header__title">{title}</h1>
			    <h2 className="header__description">Need some inspiration? 💡<br /> Take a look at what we have for you.</h2>
            </header>
        </> 
    )
};

export default Header;