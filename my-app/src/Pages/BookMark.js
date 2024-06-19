import React from 'react';

import { useContext } from "react"
import { MediaContext } from "../Contexts/contextProvider"

export const BookMark =()=>{


const { BookMark , setBookmark , DataPost } = useContext(MediaContext)

const getLatestPost = DataPost.slice(-4)


console.log(getLatestPost)

    return(<div className="explore-container" style={{backgroundColor:"red"}}>
        <p style={{margin:"0"}}>BookMark</p>

        
    </div>)
}