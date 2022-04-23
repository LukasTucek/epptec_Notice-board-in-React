import React from 'react';
import './style.css';
import { useEffect, useState } from 'react';

const Main = () => {

    const [resourceType, setResourceType] = useState('Posts');
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [resourceType])
    
    return (
        <>
        <div className="content">   
           <h1>{resourceType}</h1>
            <button className="button" onClick={() => setResourceType('Posts')}>Show more...</button>
            <button className="button" onClick={() => setResourceType('Comments')}>Comments (x)</button>

        
        {items.map(item => {

           return <li key={item.id}><br />{JSON.stringify([item])}</li>

        })}
        
        </div>
        </>
    )



};


export default Main;