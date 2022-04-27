import React from "react";
import './style.css';


const Header = ( {title, description} ) => {
    return (
        <>   
            <header className="header">
			    <h1 className="header__title">{title}</h1>
			    <h2 className="header__description">{description}</h2>
            </header>
        </> 
    )
};

export default Header;