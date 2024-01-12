import { useContext } from "react"
import { MediaContext } from "../Contexts/contextProvider"
import { PostCard } from "../cards/postCard"

export const ExplorePage =()=>{
const { DataPost , setPostData , showSinglePost , setShowSinglePost , SinglePost} = useContext(MediaContext)
console.log(DataPost)
console.log(SinglePost)

    return(<div className="explore-container">
    
    <div style={{backgroundColor:"red" , margin:"auto" , display:showSinglePost ? "flex" : "none"}}>{

        SinglePost.map((e)=><div>
            <p>{e.username}</p>
        </div>)
    }</div>

      
{
    DataPost.map((e)=>< PostCard {...e}/>)
}

       
    </div>)
}