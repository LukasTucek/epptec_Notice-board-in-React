import React from 'react';
import './style.css';
//import Post from '../Post/Post';
import { useEffect, useState } from 'react';

const Main = () => {
    const [posts, setPosts] = useState(null);
    const [users, setUsers] = useState(null);
    const [comments, setComments] = useState(null);


//async function -> potřeba využít async/await? Jinak budeme muset čekat na odpovědi. Zde ale nevím, kdy se mi vrátí data.
//"The keyword await makes JavaScript wait until that promise settles and returns its result."
//Všechny 3 dotazy probíhají najednou
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
    }


    return (
        <>
        { 
            (posts === null || users === null || comments === null) //když je alespoň jedno z nich null
            ? <p class="loading">loading data...</p>
            :   <ul>
                {posts.map(post => (
                    <div key={post.id} className="post">
                        <h2>{post.title}</h2>
                        <h3>Author - {authorName(post.userId)}</h3>
                        <p>{post.body}</p>
                        <button className="button">Show more...</button>
                        <button className="button">Comments ({commentsCount(post.Id)})</button>
                    </div>
                ))}
                </ul>
        }

            {/*<Post title={post.title} body={post.body} author={post.author} />*/}

        </>
    );

};


export default Main;