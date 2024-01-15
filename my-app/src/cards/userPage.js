import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { MediaContext } from "../Contexts/contextProvider"
import { SinglePostCard } from "./singlePostCard"
import { PostCard } from "./postCard"

export const UserPage =()=>{
    
const {usernameId} = useParams()

const {DataPost , GetUsers , SinglePost , showSinglePost , setShowSinglePost} = useContext(MediaContext)

const [showSaved , setShowSaved ] = useState(false)

console.log(GetUsers)
const users = JSON.parse(localStorage.getItem("userArray"))
 const GetDp =  users.find((e)=>e.username === usernameId ? e.profileImg :"")
 console.log(GetDp.profileImg)

 const getNumberOfPost = DataPost.filter((e)=>e.username === usernameId)
 console.log(getNumberOfPost.length)

    return(<div className="explore-container">

        <div className="userInfoContainer" >

        
        <div className="imgContainer">

<img className="circle-image-user" src={GetDp.profileImg}></img>

        </div>
        <div className="userInfo">

            <span >

            <h3 className="userInfoP">{GetDp.username}</h3><button>Edit profile</button><button>View Archive</button>
       </span>
           
            <div >
                <p><b>{getNumberOfPost.length}</b> Post</p>
                <p><b>{GetDp.followers.length}</b> Followers</p>
                <p><b>{GetDp.following.length}</b> Following</p>
                
            </div>
            <p>{GetDp.firstName} {GetDp.lastName}</p>
            <p>{GetDp.status}</p>
        </div>
        </div>
        <div className="userPgTogglePost">
        <img width="18" height="18" src="https://img.icons8.com/ios/24/grid.png" alt="grid"/><button style={{borderTop:showSaved ? "none" : "1px solid black"}} onClick={()=>setShowSaved(false)} > POSTS</button>
        <img width="18" height="18" src="https://img.icons8.com/material-sharp/24/bookmark-ribbon--v1.png" alt="bookmark-ribbon--v1"/>  <button style={{borderTop:!showSaved ? "none" : "1px solid black"}} onClick={()=>setShowSaved(true)}>SAVED</button>
        </div>

        <img onClick={()=>setShowSinglePost(false)} style={{display:showSinglePost ? "flex" :"none"}} className="cross" width="24" height="24" src="https://img.icons8.com/material-outlined/24/multiply--v1.png" alt="multiply--v1"/>
        
        <div className="PopUpSinglePost" style={{ display: showSinglePost ? "flex" : "none"  }}>
            {

                SinglePost.map((e) => <SinglePostCard {...e} />)
            }</div>
       



<div className="userPgData" >
 
        {
            DataPost.map((e)=> e.username === usernameId ? <PostCard {...e} overlay/> :null)
        }
        </div>
    </div>)
}