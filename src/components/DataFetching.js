import axios from 'axios'
import React, {useState, useEffect} from 'react'


function DataFetching() {
    // const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idFromButton, setIdFromButton] = useState(1)

    const handleClick = ()=>{
        setIdFromButton(id)
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => {
        console.log(res)
        setPost(res.data);
    }).catch(err =>{
        console.log(err)
    })
    },[idFromButton])
    return (
        <div>
            <div>
                <input type="text" value = {id} onChange = {e => setId(e.target.value)} />
                <button type= "button" onClick = {handleClick} >Fetch Post</button>
            </div>
            <div>
            {post.title}
            </div>
            {/* <ul>
                {
                    posts.map(post =>
                        <li key= {post.id}>{post.title}</li>)
                }
            </ul> */}
        </div>
    )
}

export default DataFetching
