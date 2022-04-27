import React from 'react';
import './style.css';
//import Post from '../Post/Post';
import { useEffect, useState } from 'react';
//import Router components
import {Link} from "react-router-dom";

const Main = () => {
    const [posts, setPosts] = useState(null);
    const [users, setUsers] = useState(null);
    const [comments, setComments] = useState(null);


    //async function -> potřeba využít async/await? Jinak budeme muset čekat na odpovědi. Zde totiž nevím, kdy se mi vrátí data => vyřešil jsem přes podmínku
    //"The keyword await makes JavaScript wait until that promise settles and returns its result."
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => response.json())
            .then(data => setPosts(data)) 

        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(data => setUsers(data))

        fetch(`https://jsonplaceholder.typicode.com/comments`)
            .then(response => response.json())
            .then(data => setComments(data)) 
    }, []);
    

    //finding author
    const authorName = (authorId) => {
        return users.find((user) => {
           if (user.id === authorId) {
                return true
           } else {
                return false
           }
        }).name
    };

    //comments count
    const commentsCount = (postId) => {
       return comments.filter(comment => comment.postId === postId).length
    };

    //text truncator 
    const truncate = (textLength) => {
        return textLength.length > 60 
        ? `${textLength.substring(0, 50)}...`  //zde je možné měnit zobrazovaný počet znaků
        : textLength;
    };

    return (

        <>
        { 
            (posts === null || users === null || comments === null) //když je alespoň jedno z nich null, tak zobraz <p>, jinak zobraz <ul>
            ? <p className="loading">loading data...</p> 
            :   <ul>
                {posts.map(post => (
                    <div key={post.id} className="post">
                        <h2>{post.title}</h2>
                        <h3>🗨️ {authorName(post.userId)}</h3>
                        <p>{truncate(post.body)}</p>
                        <button className="button"><Link to="/detail">Show more...</Link></button>
                        <button className="button">Comments ({commentsCount(post.id)})</button>
                    </div>
                ))}
                </ul>
        }

        </>


    );
};


export default Main;