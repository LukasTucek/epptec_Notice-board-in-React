import './style.css';
import React from 'react';
import Header from '../Header/Header';
import {Link} from "react-router-dom";


//zde by se vypisovaly konkrétní informace jednotlivých postů - název, autor, celý text a seznam všech komentářů

const Detail = () => {
    return (
    <>
    <div className="container">   
        <Header title={'notice board'} description={'Post detail right here 👇'} />
            <h2>Detail postu</h2>
            <button className="button"><Link to="/" className="back">Back to main page</Link></button>
    </div>
    </> 

    )
};


export default Detail;