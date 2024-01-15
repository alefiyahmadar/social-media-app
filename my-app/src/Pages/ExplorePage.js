import { useContext } from "react"
import { MediaContext } from "../Contexts/contextProvider"
import { PostCard } from "../cards/postCard"
import { SinglePostCard } from "../cards/singlePostCard"

export const ExplorePage =()=>{
const { DataPost , setPostData , showSinglePost , setShowSinglePost , SinglePost , GetUsers} = useContext(MediaContext)
console.log(DataPost)
console.log(SinglePost)

    return(<div className="explore-container">
        <img onClick={()=>setShowSinglePost(false)} style={{display:showSinglePost ? "flex" :"none"}} className="cross" width="24" height="24" src="https://img.icons8.com/material-outlined/24/multiply--v1.png" alt="multiply--v1"/>
    
    <div className="PopUpSinglePost" style={{  display:showSinglePost ? "flex" : "none"}}>
        {

        SinglePost.map((e)=><SinglePostCard {...e}/>)
    }</div>

      
{
    DataPost.map((e)=>< PostCard {...e} overlay/>)
}

       
    </div>)
}