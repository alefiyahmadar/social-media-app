import React from 'react';

import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { MediaContext } from "../Contexts/contextProvider"
import { SinglePostCard } from "./singlePostCard"
import { PostCard } from "./postCard"

export const UserPage =()=>{
    
const {usernameId} = useParams()

const {DataPost , GetUsers , SinglePost , showSinglePost , setShowSinglePost , showSaved , setShowSaved , loggedInUser , setLoggedInUser} = useContext(MediaContext)



useEffect(()=>{
    setShowSinglePost(false)
},[setShowSinglePost])


const users = JSON.parse(localStorage.getItem("usersArray"))

 const GetDp =  users.find((e)=>e.username === usernameId ? e.profileImg :"")
 console.log(GetDp.profileImg)

 const getNumberOfPost = DataPost.filter((e)=>e.username === usernameId)
 console.log(getNumberOfPost.length)

 console.log(loggedInUser)
 console.log(usernameId)
 const getLatestPost = DataPost.slice(-4)
    return(<div className="explore-container">

        <div className="userInfoContainer" >

        
        <div className="imgContainer">

<img className="circle-image-user" src={GetDp.profileImg}></img>

        </div>
        <div className="userInfo">

            <span style={{display:JSON.parse(localStorage.getItem("user")).username === usernameId ?"flex" :"none"}}  >

            <h3 className="userInfoP">{GetDp.username}</h3><button >Edit profile</button><button>View Archive</button>
       </span>
           
            <div >
                <p><b>{getNumberOfPost.length}</b> Post</p>
                <p><b>{GetDp.followers.length}</b> Followers</p>
                <p><b>{GetDp.following.length}</b> Following</p>
                
            </div>
            <p>{GetDp.firstName} {GetDp.lastName}</p>
            <p>{GetDp.status}</p>
        </div>
        <div className="userPgTogglePost">
        <img width="18" height="18" src="https://img.icons8.com/ios/24/grid.png" alt="grid"/><button style={{borderTop:showSaved ? "1px solid wheat" : "1px solid black"}} onClick={()=>setShowSaved(false)} > POSTS</button>
        <img width="18" height="18" src="https://img.icons8.com/material-sharp/24/bookmark-ribbon--v1.png" alt="bookmark-ribbon--v1"/>  <button style={{borderTop:!showSaved ? "1px solid wheat" : "1px solid black"}} onClick={()=>setShowSaved(true)}>SAVED</button>
        </div>
        </div>
        


        
        <div className="PopUpSinglePost" style={{ display: showSinglePost ? "flex" : "none"  }}>

        <img onClick={()=>setShowSinglePost(false)} style={{display:showSinglePost ? "block" :"none" , position:"absolute" , right:"0"}} className="cross" width="24" height="24" src="https://img.icons8.com/material-outlined/24/multiply--v1.png" alt="multiply--v1"/>
            {

                SinglePost.map((e) => <SinglePostCard {...e} />)
            }</div>
       



<div className="userPgData" style={{display:showSaved ? "none" :"block"}} >
 
        {
            DataPost.map((e)=> e.username === usernameId ? <PostCard {...e} overlay/> :null)
        }
        </div>

        <div className="postSaveContainer" style={{display:showSaved ? "block" :"none" }}>
   
        {
    DataPost.map((e)=>< PostCard {...e} overlay/>)
}
      



</div> 





















    </div>)
}