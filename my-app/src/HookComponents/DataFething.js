import React, {useState,useEffect} from 'react'
import axios from 'axios'

function DataFething() {
    const [post,setPost]  = useState({})
    const [id,setId] = useState(1)
    const [idfromButtonClick, setIdFromButtonClick] = useState(1)

    useEffect(()=> {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res)=> {
            console.log(res)
            setPost(res.data)
        })
        .catch((err)=> {
            console.log(err)
        })
    },[idfromButtonClick])
    const handleButton =()=> {
        setIdFromButtonClick(id)
    }
    return (
        <div>
            <input type='text' value = {id} onChange = {(event)=> setId(event.target.value) } />
            <button type='button' onClick= {handleButton} >Click </button>
            {/* <ul>
                {
                    post.map((post)=> <li key={post.id}> {post.title} </li>)
                }
            </ul> */}
            <div> {post.title} </div>
        </div>
    )
}

export default DataFething
